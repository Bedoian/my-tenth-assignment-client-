import { Link, useLoaderData } from "react-router-dom";
import loIcon from '../../assets/icons8-location-64.png'
import star from '../../assets/icons8-star-96.png'
import duration from '../../assets/icons8-time-100.png'
const AllSpot = () => {
    const loadedData = useLoaderData()

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-5">
            {
                loadedData.map(spot => <div key={spot._id} className=" bg-base-100 border-gray-300 rounded-xl border-2 shadow-xl">
                    <figure>
                        <img
                            className="rounded-t-lg"
                            src={spot.photo}
                            alt="" />
                    </figure>
                    <div className=" p-4">
                        <div className="flex text-start ">
                            <img className="w-5 h-5" src={loIcon} alt="" />
                            <p className="text-gray-500 relative bottom-1">{spot.location}</p>
                        </div>
                        <p className=" text-start text-xl font-semibold">{spot.name}</p>
                        <div className="flex py-1">
                            <img className="w-5 h-5" src={star} alt="" />
                            <p>{spot.country}</p>
                        </div>
                        <div className="flex gap-4 border-b-2 pb-3">
                            <button className="p-2 bg-green-100 text-green-600 rounded-full">#{spot.season}</button>
                            <Link to={`/viewDetail/${spot._id}`}>
                            <button className="btn btn-ghost rounded-full  text-blue-500 border-blue-500">View more</button>
                            </Link>
                        </div>
                        <div className="flex justify-between mt-3">
                            <p className="text-lg">From: <span className="text-blue-500 text-lg font-bold">€{spot.cost}</span></p>
                            <div className="flex gap-1">
                                <img className="w-4 h-4 relative top-[5px]" src={duration} alt="" />
                                <p>{spot.Ttime}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default AllSpot;