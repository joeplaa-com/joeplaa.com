import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ src, ...rest }) => {
    const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth: 1920, srcSetBreakpoints: [320, 480, 640, 960, 1280, 1600, 1920])
              {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

    const match = useMemo(
        () => data.images.edges.find(({ node }) => src === node.relativePath),
        [data, src]
    );

    if (!match) return null;

    const { node: { childImageSharp, publicURL, extension } = {} } = match;

    if (extension === 'svg' || !childImageSharp) {
        return <img src={publicURL} {...rest} />;
    }

    return <Img
        fluid={childImageSharp.fluid}
        {...rest} />;
};

export default Image;