import React from 'react'
import { CardSubtitle, Col, Row } from 'reactstrap'
import Tag from './tag'
import formatPostTags from '../utils/formatPostTags'
import { PostSubtitleProps, LabelProps } from '../types'

export default function PostSubtitle ({ className, date, readingTime, tags }: PostSubtitleProps) {
    return (
        <CardSubtitle className={className}>
            <Row>
                <Col xs='12' className='d-inline-flex align-items-center mb-2'>
                    <em>{date}</em><span className='ml-auto'>{readingTime}</span>
                </Col>
                <Col xs='12' className='tags'>
                    {formatPostTags(tags).map((tag: LabelProps) => (
                        <Tag key={tag.value} tag={tag} />
                    ))}
                </Col>
            </Row>
        </CardSubtitle>
    )
}