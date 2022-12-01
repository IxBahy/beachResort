import React from 'react'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Link } from 'react-router-dom'
import { Services } from '../components/Services'
import { FeaturedRooms } from '../components/FeaturedRooms'

export const Home = () => {
    return (
        <>
            <Hero hero='defaultHero' >
                <Banner title='luxurious rooms' subtitle='deluxe room starting at $299' >
                    <Link to='/rooms' className='btn-primary' >
                        Our Rooms
                    </Link>
                    {/* banner-btn */}
                </Banner>
                {/* end-banner */}
            </Hero>
            {/* end of hero */}
            <Services />
            <FeaturedRooms />
            
        </>
    )
}
