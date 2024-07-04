
import { useLoaderData } from "react-router-dom";
import LoIcon from '../../assets/icons8-location-64.png'
import euro from '../../assets/icons8-money-96.png'
import vacation from '../../assets/icons8-vacation-96.png'
const ViewDetail = () => {
    const detail = useLoaderData()
    const { name, country, location, photo, cost, Ttime, visitor, discription, season } = detail;
    return (
        <div>
            <div className=" mt-10">
                <div className=" flex gap-7">
                    <div className="  mb-6  rounded-lg">
                        <img src={photo} className="lg:w-[800px] " />
                    </div>
                    <div className="w-3/5 text-start">
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
                                            <td className="flex">
                                                <img className="w-8 h-8" src={euro} alt="" />
                                                <p className="relative top-1 text-blue-500 text-lg font-bold">€{cost}</p>
                                            </td>
                                            <td className="text-sm font-bold"></td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm text-gray-500 font-semibold">Publisher :</td>
                                            <td className="text-sm font-bold"></td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm text-gray-500 font-semibold">Year of Publishing :</td>
                                            <td className="text-sm font-bold"></td>
                                        </tr>
                                        <tr>
                                            <td className="text-sm text-gray-500 font-semibold">Rating :</td>
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