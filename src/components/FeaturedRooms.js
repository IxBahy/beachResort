import React, { useContext } from 'react'
import { RoomContext } from '../context'
import { Loading } from './Loading';
import { Room } from './Room';
import { Title } from './Title'
export const FeaturedRooms = () => {

    let { loading, featuredRooms: rooms } = useContext(RoomContext);

    rooms = rooms.map(room => {
        return <Room key={room.id} room={room}></Room>
    })

    return (
        <>
            <section className='featured-rooms'>
                <Title title='Featured Rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>

            </section>
        </>

    )

}
