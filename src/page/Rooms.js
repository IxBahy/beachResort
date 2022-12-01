import React from 'react'
import { Banner } from '../components/Banner'
import { Hero } from '../components/Hero'
import { Link } from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
export const Rooms = () => {
    return (
        <>
            <Hero hero='roomsHero' >
                <Banner title='Our Rooms' subtitle=''>
                    <Link to='/' className='btn-primary' >
                        Return to Home
                    </Link>
                    {/* banner-btn */}
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    )
}
