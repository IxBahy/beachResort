import React from 'react'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Link } from 'react-router-dom'
export const Error = () => {
    return (
        <>
            <Hero >
                <Banner title='404' subtitle='Page not found'>
                    <Link to='/' className='btn-primary' >
                        Return to Home
                    </Link>
                    {/* banner-btn */}
                </Banner>
            </Hero>
        </>
    )
}
