import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { Container } from 'reactstrap'
import HeroPost from '../src/components/hero-post'
import Layout from '../src/components/layout'
import Filter from '../src/components/filter'
import MoreStories from '../src/components/more-stories'
import { AllPostsProps, PostTypeProps } from '../src/types'
import { getAllPosts } from '../src/lib/api'
import { mdFields } from '../src/lib/constants'
import { siteInfo, navigation } from '../src/lib/data'
import filterTag from '../src/lib/filterTag'
import getTags from '../src/lib/getTags'
import { applicationActionCreators } from '../src/store/actions/application'

export default function Blog({ allPosts, tags }: AllPostsProps) {
    const dispatch = useDispatch();
    const application = useSelector((state) => state.application);
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    
    useEffect(() => {
        dispatch(applicationActionCreators.addTagsFilter('blog', tags));
    }, []);

    return (
        <>
            <NextSeo
                title={siteInfo.HomeTitle}
                titleTemplate={siteInfo.SiteTitle + ' | %s'}
                description={siteInfo.HomeDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + navigation.home,
                    title: siteInfo.HomeTitle,
                    description: siteInfo.HomeDescription,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-blog.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa blog banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={heroPost.excerpt} siteTitle={heroPost.title} >
                <Container>
                    {heroPost && filterTag(heroPost, application.filter.blog) && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                            tags={heroPost.tags}
                        />
                    )}
                    <Filter page='blog' tags={tags} />
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts(mdFields);
    const tags = [];
    allPosts.forEach((post: PostTypeProps) => {
        getTags(post.tags).map(postTag => tags.filter(tag => tag.value === postTag.value).length > 0 ? null : tags.push(postTag));
    });

    return {
        props: { allPosts, tags },
    }
}
