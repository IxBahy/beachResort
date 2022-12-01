import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Banner } from '../components/Banner'
// import { Hero } from '../components/Hero'
import StyledHero from '../components/StyledHero'
import { RoomContext } from '../context'
import defaultBg from '../images/room-1.jpeg'

export const SingleRoom = () => {
    let slug = useParams().slug
    const [state] = useState({ slug, defaultBg });
    const context = useContext(RoomContext)

    const { getRoom } = context
    const room = getRoom(state.slug)
    if (!room) {
        return <div className='error'>
            <h3>no such room found</h3>
            <Link to='/rooms' className='btn-primary'>
                back to rooms
            </Link>
        </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images } = room

    return (
        <>
            <StyledHero image={images[0] || defaultBg}>
                <Banner title={`${name} room`} >
                    <Link to='/rooms' className='btn-primary'>back to rooms </Link>
                </Banner>
                {/* end of Banner component */}
            </StyledHero>
            {/* end of hero */}
            <section className='single-room'>
                <div className='single-room-images'>
                    {images.slice(1, 4).map((image, index) => {
                        return <img key={index} src={image} alt={name} />
                    })}
                </div>
                {/* images section */}
                <div className='single-room-info'>
                    <article className='desc'>
                        <h3>
                            details
                        </h3>
                        <p>
                            {description}
                        </p>
                    </article>
                    {/* end of room describtion */}
                    <article className='info'>
                        <h3>
                            info
                        </h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>max capacity : {capacity > 1 ? capacity + 'people' : 'single person'} </h6>
                        <h6>{pets ? 'pets are allowed' : 'no pets allowed'}</h6>
                        <h6>{breakfast && 'breakfast is free'}</h6>
                    </article>
                    {/* end of room info */}
                </div>
                {/* end of room info */}
            </section>
            {/* end of room info section */}
            <section className='room-extras'>
                <h6>
                    extras
                </h6>
                <ul className='extras'>
                    {extras.map((item, index) => {
                        return (
                            <li key={index}>
                                - {item}
                            </li>
                        )
                    })}
                </ul>
            </section>
            {/* end of room extras */}
        </>
    )
}

