import React from 'react'
import SEO from 'react-seo-component'
import { Link } from '../components/customLink'
import { Container, Card, CardBody, CardColumns, CardTitle, CardText, Row } from 'reactstrap'
import BannerBlog from '../svg/banner-blog.svg'
import BannerBlogRecommended from '../svg/banner-blog-recommended.svg'
import BannerWwwCom from '../svg/banner-www-com.svg'
import BannerWwwHowto from '../svg/banner-www-howto.svg'
import BannerWwwPortfolio from '../svg/banner-www-portfolio.svg'
import BannerWwwWebsites from '../svg/banner-www-websites.svg'
import { content, metaData, navigation } from '../utils/data'

const Landing = () => {
    return (
        <>
            <SEO
                title={metaData.LandingTitle}
                description={metaData.HomeDescription || `nothin’`}
                image={`${metaData.SiteUrl}${metaData.HomeImage}`}
                pathname={`${metaData.SiteUrl}${navigation.home}`}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
            />

            <section className='section-fill blue-dark' id={metaData.LandingTitle}>
                <Container className='text-center text-md-left my-auto'>
                    <Row>
                        <CardColumns>
                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.howto}>{metaData.HowtoTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.howto}><BannerWwwHowto width='300px' /></Link>
                                    <CardText>{metaData.HowtoDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.services}>{metaData.ServicesTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.services}><BannerWwwWebsites width='300px' /></Link>
                                    <CardText>{metaData.ServicesDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.pricing}>{metaData.PricingTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.pricing}><BannerWwwCom width='300px' /></Link>
                                    <CardText>{metaData.PricingDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.portfolio}>{metaData.PortfolioTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.portfolio}><BannerWwwPortfolio width='300px' /></Link>
                                    <CardText>{metaData.PortfolioDescription}</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.blog}>{content.Blog}</Link></h5></CardTitle>
                                    <Link to={navigation.blog}><BannerBlog width='300px' /></Link>
                                    <CardText>My blog with subjects from diet to mindset and psychology to sociology and politics.</CardText>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardBody>
                                    <CardTitle><h5><Link to={navigation.recommended}>{metaData.RecommendedTitle}</Link></h5></CardTitle>
                                    <Link to={navigation.recommended}><BannerBlogRecommended width='300px' /></Link>
                                    <CardText>{metaData.RecommendedDescription}</CardText>
                                </CardBody>
                            </Card>
                        </CardColumns>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Landing;
