import React from "react"
import { Link } from 'gatsby'
import { Col, Container, Row } from 'reactstrap'
import Image from "./image";
import Social from "./social";
import { navigation, siteInfo } from '../utils/data'

const About = () => {
    return (
        <section className='section-home' id="About">
            <Container>
                <Row>
                    <Col className='my-md-auto mb-3 mt-3'>
                        <h3>What is Joeplaa</h3>
                        <p>
                            Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: {siteInfo.FirstName} {siteInfo.LastName}. Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle <code>@joeplaa</code> everywhere on the web.
                            I&apos;ve originally started joeplaa.com as my <a href={navigation.blog}>personal blog</a>, which you can still find <a href={navigation.blog}>here</a>.
                        </p>
                        <p>
                            Now, with this website, joeplaa.com 2.0, I want to show you what I can do. It both is and contains my <Link to={navigation.portfolio}>portfolio</Link>. Have a look around and <Link to={navigation.contact}>let me know</Link> if you like my work.
                        </p>
                    </Col>
                    <Col xs='12' md='auto' className='my-md-auto mb-3 mt-3'>
                        <div className='mx-auto ml-md-auto shadow' style={{ width: '250px' }}>
                            <Image
                                src={'headshot_new.jpg'}
                                alt={'Headshot Joep'}
                                className="mx-auto"
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs='12' md='auto' className='my-md-auto mb-3 mt-3'>
                        <div className='mx-auto mr-md-auto shadow' style={{ width: '250px' }}>
                            <Image
                                src={'headshot_new.jpg'}
                                alt={'Headshot Joep'}
                                className="mx-auto"
                            />
                        </div>
                    </Col>
                    <Col className='my-md-auto mb-3 mt-3'>
                        <h3>Who is Joeplaa</h3>
                        <p>
                            I&apos;m {siteInfo.FirstName}, 35 years old and currently living in <a href='https://en.wikipedia.org/wiki/Eindhoven' target='_blank' rel='noopener noreferrer'>Eindhoven in The Netherlands</a>. I went to Eindhoven to study mechanical engineering at <a href='https://www.tue.nl/' target='_blank' rel='noopener noreferrer'>TU/e</a> university.
                            After working as a mechanical engineer for 7.5 years, I quit my "dayjob" and started working full time on my own company: <a href='https://www.jodibooks.com' target='_blank' rel='noopener noreferrer'>jodiBooks</a>.
                        </p>
                        <p>
                            At jodiBooks I have learned how to do front-end design and website hosting. Now I will also help you create your digital home. I'll design your homepage and take care of hosting it.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='mb-3 mt-3'>
                        <Social className='justify-content-center' color='dark' size='2rem' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;