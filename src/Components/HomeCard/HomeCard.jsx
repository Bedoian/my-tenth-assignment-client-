import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomeCard = () => {
    const [cardSpot, setCardSpot] = useState([])
    useEffect(() => {
        fetch('https://my-tenth-assignment-server-one.vercel.app/spot')
            .then(res => res.json())
            .then(data => setCardSpot(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl hidden md:block font-bold mt-16 relative right-64">Top Destination For Your Next Vacation</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 mx-3 mt-12">
                {
                    cardSpot.map(card => <div key={card._id} className=" shadow-xl]">
                        <img className="rounded-xl hero-overlay bg-gray-800 lg:w-72 lg:h-[360px]"
                            src={card.photo} />

                      <div className="relative right-4 bottom-32">
                      <h1 className="text-4xl text-white font-bold ">{card.name}</h1>
                    <Link to={`/viewDetail/${card._id}`}>
                    <button className="btn btn-ghost rounded-full  text-white relative top-4 r  border-white hover:text-green-500 hover:border-green-500">View Deails</button>
                    </Link>
                      </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeCard;