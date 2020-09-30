import React from 'react'
import { Container, Col, Row, Card, CardBody, CardDeck, Table } from 'reactstrap'
import { content, metaData } from '../utils/data'
import { SectionProps } from '../types'

const Pricing = ({ className }: SectionProps) => {
    return (
        <section className={className} id={metaData.PricingTitle}>
            <Container className='text-center text-md-left my-md-auto mb-3 mt-3'>
                <Row>
                    <Col>
                        <h1 className='display-1'>{metaData.PricingTitle}</h1>
                    </Col>
                </Row>
                <CardDeck>
                    <Card>
                        <CardBody>
                            <h2>{content.WebDesign}</h2>
                            <Table striped hover>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Option</th>
                                        <th>Website type</th>
                                        <th>Cost<sup>1</sup></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Static</td>
                                        <td>&euro;500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dynamic</td>
                                        <td>&euro;750</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>CMS</td>
                                        <td>&euro;750</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Custom</td>
                                        <td>&euro;1000+<sup>2</sup></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <em><sup>1</sup>Ex. Dutch VAT (21%)</em><br />
                            <em><sup>2</sup>Depending on requirements</em>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <h2>{content.WebHosting}</h2>
                            <Table striped hover>
                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Option</th>
                                        <th>Website type</th>
                                        <th>Costs per month<sup>1</sup></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Static</td>
                                        <td>&euro;5</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Dynamic</td>
                                        <td>&euro;10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>CMS</td>
                                        <td>Not available</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </CardDeck>
            </Container>
        </section >
    );
}

export default Pricing;