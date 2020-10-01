import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { FaSlidersH } from 'react-icons/fa'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import Tag from '../components/tag'
import { filterActionCreators } from '../store/actions/filter'
import { content, settings } from '../utils/data'
import { FilterProps, LabelProps } from '../types'

export default function Filter({ page, tags }: FilterProps) {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);

    const [modal, setModal] = useState(false);
    function toggle() {
        setModal(!modal);
    }

    function setFilter(el: Array<LabelProps>) {
        dispatch(filterActionCreators.setTagsFilter(page, el))
    }

    function applyFilter() {
        toggle();
    }

    function resetFilter() {
        dispatch(filterActionCreators.resetTagFilter());
    }

    const animatedComponents = makeAnimated();

    return (
        <section>
            <Row className={'filter'}>
                <Col className='mx-auto'>
                    <Card className='mt-2'>
                        <CardBody>
                            <Row className='d-flex justify-content-between'>
                                <Col xs='12' sm='auto' className='d-flex align-items-center flex-wrap tags'>
                                    {filter.userFilter[page].length > 0 && filter.userFilter[page].map(tag => (
                                        <Tag key={tag.value} tag={tag} page={page} />
                                    ))}
                                </Col>
                                <Col xs='12' sm='auto'>
                                    <Button outline color='primary' onClick={toggle} aria-label='filter-button'>
                                        <FaSlidersH />
                                        <span className={'d-none d-' + settings.breakpoint + '-inline'}>{' '}{content.Filter}</span>
                                    </Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{content.FilterTags}</ModalHeader>
                <ModalBody>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        value={filter.userFilter[page]}
                        isMulti
                        name='tags'
                        noOptionsMessage={() => <p>{content.NoOptionsSelect}</p>}
                        options={tags}
                        onChange={setFilter}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button outline color='primary' onClick={resetFilter}>{content.ShowAll}</Button>{' '}
                    <Button color='primary' onClick={applyFilter}>{content.Ok}</Button>{' '}
                </ModalFooter>
            </Modal>
        </section>
    );
}