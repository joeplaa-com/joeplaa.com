import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import SEO from 'react-seo-component'
import Layout from '../components/layout'
import { metaData } from '../utils/data'
import { PostTemplateProps } from '../types'

const PostTemplate = ({ data, pageContext }: PostTemplateProps) => {
    const { frontmatter, body, fields, excerpt } = data.mdx;
    const { title, date, cover } = frontmatter;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <SEO
                title={title}
                titleTemplate={metaData.PageTitle}
                description={excerpt}
                image={
                    cover === null
                        ? `${metaData.SiteUrl}${metaData.SiteImage}`
                        : `${metaData.SiteUrl}${cover.publicURL}`
                }
                pathname={`${metaData.SiteUrl}${fields.slug}`}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
                author={metaData.AuthorName}
                article={true}
                datePublished={date}
                dateModified={new Date(Date.now()).toISOString()}
            />
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <MDXRenderer>{body}</MDXRenderer>
            {!previous ? null : (
                <>
                    {previous && (
                        <Link to={previous.fields.slug}>
                            <p>{previous.frontmatter.title}</p>
                        </Link>
                    )}
                </>
            )}
            {!next ? null : (
                <>
                    {next && (
                        <Link to={next.fields.slug}>
                            <p>{next.frontmatter.title}</p>
                        </Link>
                    )}
                </>
            )}
        </Layout>
    );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        cover {
          publicURL
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;

export default PostTemplate;