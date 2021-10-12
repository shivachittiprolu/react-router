import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Home() {
    useEffect(()=>{
        fetchItems()
    },[])

    const [items, setitems] = useState([])

    const fetchItems = async () => {
        try{
            const data = await axios.get('https://fortnite-api.theapinetwork.com/upcoming/get')
            // const items = await data.json()
            const items = data.data;
            setitems(items.data)
            // console.log(items.data)
        }
        catch(err){
            console.log(err.message)
        }
    } 

    return (
        <div>
            <h1>Shop</h1>
            {items.map (item => (
                <h2 key={item.itemId}><Link to = {`/Home/${item.itemId}`}>{item.item.name}</Link></h2>
                // <h6>{item.item.description}</h6>
            ))}
        </div>
    )
}

export default Home
