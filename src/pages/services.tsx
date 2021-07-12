import React, { ReactElement } from 'react';
import SEO from 'react-seo-component';
import Contact from '../components/contact';
import ServicesComponent from '../components/services';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';

const Home = (): ReactElement => {
    const { pageServicesDescription, pageServicesImage, pageServicesTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { services } = useSiteNavigation();
    return (
        <>
            <SEO
                title={pageServicesTitle}
                description={pageServicesDescription || 'nothin’'}
                image={`${siteUrl}${pageServicesImage}`}
                pathname={`${siteUrl}${services}`}
                titleSeparator={titleSeparator}
                titleTemplate={titleTemplate}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <ServicesComponent className='section-fill' />

            <Contact className='section-fill' />
        </>
    );
};

export default Home;