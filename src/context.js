import React, { Component } from 'react'
// import { Room } from './components/Room.js'
// import items from './data/data.js'
import Client from './data/Contentful'

//context
const RoomContext = React.createContext()
class RoomProvider extends Component {
    //unpacking the data 
    state = {
        rooms: [],//all rooms 
        sortedRooms: [],//for rooms after filtering
        featuredRooms: [],//in home
        loading: true,
        type: 'all',
        capacity: 0,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        petsw: false
    }
    //get data from contentful api
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'beachResortRoom'

            })
            let rooms = this.formatData(response.items)
            let featuredRooms = rooms.filter(room => room.featured === true)
            let maxPrice = Math.max(...rooms.map(room => room.price))
            let maxSize = Math.max(...rooms.map(room => room.size))
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice, maxSize
            })
        } catch (error) {
            console.log(error);
        }
    }
    componentDidMount() {
        this.getData()
    }

    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image =>
                image.fields.file.url
            )
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find((room) => room.slug === slug)
        return room
    }

    handleChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value,

        }, this.filterRooms)

    }


    filterRooms = () => {
        let { rooms,
            type,
            capacity,
            price,
            minSize,
            maxSize,
            breakfast,
            pets,
        } = this.state
        let tempRooms = [...rooms]
        //filter by type
        if (type !== 'all') {
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        //filter by capacity


        if (capacity !== 'all') {
            tempRooms = tempRooms.filter(room => room.capacity.toString() === capacity)
        }
        // filter by price 
        price = parseInt(price)
        tempRooms = tempRooms.filter(room => room.price <= price)
        //filter by size
        minSize = parseInt(minSize)
        maxSize = parseInt(maxSize)
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        //filter by checkbox
        if (breakfast) {
            tempRooms = tempRooms.filter(room => room.breakfast === breakfast)
        }
        if (pets) {
            tempRooms = tempRooms.filter(room => room.pets === pets)
        }


        //set the sortedRooms to the output of the filtering process above
        this.setState({
            sortedRooms: tempRooms
        })
    }

    render() {
        return (
            <>
                <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom, handleChange: this.handleChange }}>
                    {this.props.children}
                </RoomContext.Provider>
            </>
        )
    }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }