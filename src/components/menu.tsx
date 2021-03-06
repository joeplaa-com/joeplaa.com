import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Navigation from './navigation'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSiteSettings from '../hooks/useSiteSettings'
import BannerWwwCom from '../svg/banner-www-com.svg'
import { NavbarProps } from '../types'

export default function Menu ({ navbarLightText }: NavbarProps) {
    const { home } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    // *** Get scroll position and change navbar styling accordingly
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarTop = navbarLightText ? 'navbar-dark top light-text' : 'navbar-light top dark-text'
    const navbarActive = scrollPosition > 10 ? 'active shadow navbar-light' : collapsed ? 'active navbar-light' : navbarTop;
    const navbarToggle = scrollPosition > 10 ? 'navbar-light top dark-text' : collapsed ? 'navbar-light top dark-text' : navbarTop;
    // ***

    return (
        <Navbar className={navbarActive + ' ' + 'fixed-top'} expand={breakpoint}>
            <div className={navbarTop + ' ' + 'd-flex align-items-center p-0 navbar-brand'}>
                <AnchorLink to={home}>
                    <BannerWwwCom height="55px" />
                </AnchorLink>
            </div>
            <NavbarToggler onClick={toggleNavbar} className={navbarToggle} />
            <Collapse isOpen={collapsed} navbar>
                <Navigation className='ml-auto' />
            </Collapse>
        </Navbar>
    );
}