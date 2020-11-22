import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import PostMore from '../components/postMore'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { PostQueryProps } from '../types'
import { navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const Tag = ({ data, pageContext }: PostQueryProps) => {
    const { siteDescription, siteImage, siteLanguage, siteLocale, siteTitle, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const posts = data.allMdx.nodes;
    const tags = formatAllTags([pageContext.tag]);
    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription || `nothin’`}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}${pageContext.slug}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill blue-light' id={siteTitle}>
                <Container className='my-auto'>
                    <FilterCard page={navigation.tags} tags={tags} />
                    {posts.length > 0 && <PostMore posts={posts} />}
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
  query tagsBySlug($tagValue: String) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true }, tags: { in: [$tagValue] } } }
    ) {
      nodes {
        id
        frontmatter {
          author
          cover {
            publicURL
            childImageSharp {
                fluid(srcSetBreakpoints: [320, 640, 960]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          date(formatString: "YYYY MMMM D")
          excerpt
          tags
          title
        }
        fields {
          slug
        }
      }
    }
  }
`;

export default Tag;
