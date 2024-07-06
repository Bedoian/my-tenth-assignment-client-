import { useEffect, useState } from "react";
import loIcon from '../../assets/icons8-location-64.png'
import star from '../../assets/icons8-star-96.png'
import duration from '../../assets/icons8-time-100.png'
import { Link } from "react-router-dom";
const CountryCard = () => {
    const[cardCon,setCard]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res=>res.json())
        .then(data=>setCard(data))
    },[])
    return (
        <div>
        <h1 className="text-3xl my-4 font-bold">Countries Section</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-3 grid-cols-1 gap-3 lg:gap-5">
            {
                cardCon.map(card => <div key={card._id} className=" bg-base-100 border-gray-300 rounded-xl border-2 shadow-xl">
                    <figure>
                        <img
                            className="rounded-t-lg"
                            src={card.photo}
                            alt="" />
                    </figure>
                    <div className=" p-4">
                        <div className="flex text-start ">
                            <img className="w-5 h-5" src={loIcon} alt="" />
                            <p className="text-gray-500 relative bottom-1">{card.location}</p>
                        </div>
                        <p className=" text-start text-xl font-semibold">{card.name}</p>
                        <div className="flex py-1">
                            <img className="w-5 h-5" src={star} alt="" />
                            <p>{card.country}</p>
                        </div>
                        <div className="flex gap-4 border-b-2 pb-3">
                            <button className="p-2 bg-green-100 text-green-600 rounded-full">#{card.season}</button>
                            <Link to={`/viewCountry/${card._id}`}>
                                <button className="btn btn-ghost rounded-full  text-blue-500 border-blue-500">View more</button>
                            </Link>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p className="text-lg">From: <span className="text-blue-500 text-lg font-bold">€{card.cost}</span></p>
                            <div className="flex gap-1">
                                <img className="w-4 h-4 relative top-[5px]" src={duration} alt="" />
                                <p>{card.Ttime}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
    );
};

export default CountryCard;