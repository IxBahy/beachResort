import React, { useContext } from 'react'
import { RoomContext } from '../context'
import { Title } from '../components/Title'

//get all unique room  values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}


export const RoomsFilter = (rooms) => {
    const context = useContext(RoomContext)
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
    } = context

    //unique types
    let types = getUnique(rooms.rooms, 'type')
    //adding the all option
    types = ['all', ...types]

    // map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })

    //unique capacity
    let capacities = getUnique(rooms.rooms, 'capacity')
    capacities = ['all', ...capacities]
    capacities = capacities.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        )
    })

    return (
        <>
            <section className='filter-container'>
                <Title title='search rooms' />
                <form className='filter-form'>
                    {/* select type */}
                    <div className='form-group'>
                        <label htmlFor='type'> room type</label>
                        <select name='type' id='type' value={type} className="form-control" onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/* end of select type */}

                    {/* select capacity */}
                    <div className='form-group'>
                        <label htmlFor='capacity'> Guests</label>
                        <select name='capacity' id='capacity' value={capacity} className="form-control" onChange={handleChange}>
                            {capacities}
                        </select>
                    </div>
                    {/* end of select capacity */}

                    {/* price filter */}
                    <div className='form-group'>
                        <label htmlFor='price'>room price : {price}</label>
                        <input className='form-control' type="range" name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} />
                    </div>
                    {/* end of price filter */}

                    {/* size filter */}
                    <div className='form-group'>
                        <label htmlFor='size'>room size</label>
                        <div className="size-inputs">
                            <input
                                type="number"
                                name="minSize"
                                id="size"
                                value={minSize}
                                onChange={handleChange}
                                className="size-input"
                            />
                            <input
                                type="number"
                                name="maxSize"
                                id="size"
                                value={maxSize}
                                onChange={handleChange}
                                className="size-input"
                            />
                        </div>
                    </div>
                    {/* end of size filter */}
                    {/* checkboxes */}
                    <div className='form-group'>
                        <div className='single-extra'>
                            <input type="checkbox" name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                            <label htmlFor='breakfast'>breakfast</label>
                        </div>
                        <div className='single-extra'>
                            <input type="checkbox" name='pets' id='pets' checked={pets} onChange={handleChange} />
                            <label htmlFor='pets'>pets</label>
                        </div>
                    </div>
                    {/* end of checkboxes */}
                </form>
            </section>
            {/* end of filter section */}
        </>
    )
}
