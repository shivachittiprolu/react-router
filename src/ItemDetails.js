import { useState, useEffect } from 'react'
import './ItemDetails.css'
import axios from 'axios'

function ItemDetails(match) {

    useEffect(()=>{
        fetchItem()
    },[])

    const [item, setitem] = useState({images: {}})

    const fetchItem = async () => {
       try{
            const fetchItem = await axios.get(`https://fortnite-api.theapinetwork.com/item/get?id=${match.match.params.id}`)
            // const item = await fetchItem.json()
            const item = fetchItem.data.data.item
            setitem(item)
            // console.log(fetchItem.data.data.item)
       }
       catch(err){
            console.log(err.message)
       }
    } 

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.icon} alt={item.name} className="itemImg" />
            {/* <h5>{`Rating: ${item.ratings.avgStars}`}</h5> */}
            <p>{item.description}</p>
        </div>
    )
}

export default ItemDetails
