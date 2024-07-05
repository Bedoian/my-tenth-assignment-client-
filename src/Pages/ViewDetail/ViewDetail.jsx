
import { useLoaderData } from "react-router-dom";
import LoIcon from '../../assets/icons8-location-64.png'
import euro from '../../assets/icons8-money-96.png'
import map from '../../assets/icons8-country-96.png'
import duration from '../../assets/icons8-time-100.png'
const ViewDetail = () => {
    const detail = useLoaderData()
    const { name, country, location, photo, cost, Ttime, visitor, discription, season } = detail;
    return (
        <div>
            <div className=" mt-10">
                <div className=" flex lg:flex-row flex-col gap-7">
                    <div className="  mb-6  rounded-lg">
                        <img src={photo} className="lg:w-[800px] rounded-2xl " />
                    </div>
                    <div className=" lg:w-3/5 text-start">
                        <p className="text-3xl font-bold"></p>
                        <div className="border-b-[2px] border-dashed border-green-400 pb-2">
                            <p className="my-3 text-2xl font-bold  ">{name}</p>
                            <div>
                                <div className="flex relative right-2">
                                    <img className="w-7 h-7" src={LoIcon} alt="" />
                                    <p>{location}</p>
                                </div>
                                <div></div>
                            </div>
                        </div>
                        <p className="  text-gray-600 border-b-[2px] border-dashed border-orange-400 pb-2"><span className="text-xl font-bold text-black">Discription : </span>{discription}</p>
                        <br />
                        <div className="relative bottom-7">
                            <div className="overflow-x-auto relative right-5">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="flex justify-between relative lg:left-0 left-5">
                                                <div className="flex relative lg:top-2">
                                                    <img className="lg:w-8 w-6 h-6 lg:h-8" src={euro} alt="" />
                                                    <p className="lg:relative top-1 text-blue-500 text-lg font-bold">€{cost}</p>
                                                </div>
                                                <div className="relative lg:top-0 lg:left-0  left-4">
                                                    <p className="bg-green-100  lg:p-2 rounded-full text-lg font-semibold text-green-500">#{season} Vacation</p>
                                                </div>
                                            </td>
                                            <td className="text-sm font-bold"></td>
                                        </tr>
                                        <tr>
                                            <td className="flex relative lg:left-0 left-6 justify-between">
                                                <div className="flex gap-1">
                                                    <img className="w-5 h-5" src={duration} alt="" />
                                                    <p className="text-[15px] relative bottom-[1px] text-gray-500 font-semibold">{Ttime}</p>
                                                </div>
                                                <div className="flex gap-1">
                                                    <img  className="w-7 h-7 relative bottom-1" src={map} alt="" />
                                                    <p className="text-[15px]  font-semibold text-red-500">{country}</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center relative lg:left-0 left-6 text-lg font-semibold">About {visitor} people visit yearly</td>
                                            <td className="text-sm font-bold" ></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;