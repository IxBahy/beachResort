import React, { useState } from 'react'
import { Title } from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
export const Services = () => {

    const [services, setServices] = useState([
        { icon: <FaCocktail />, title: "Free Coctails", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
        { icon: <FaHiking />, title: "Endless Hiking", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
        { icon: <FaShuttleVan />, title: "Free Shuttle", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" },
        { icon: <FaBeer />, title: "Strongest Beer", info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore" }
    ]);

    return (
        <>
            <section className='services'>

                <Title title='Services' />
                <div className='services-center'>
                    {services.map((item, index) => {
                        return (
                            <article key={index}>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
        </>

    )
}
