import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const loadedData = useLoaderData()
    const [season, setSeason] = useState();
    const navigate=useNavigate()
    const handleUpdate = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const country = form.country.value;
        const location = form.location.value;
        const photo = form.photo.value;
        const cost = form.cost.value;
        const Ttime = form.time.value;
        const visitor = form.visitor.value;
        const discription = form.discription.value;

        const spotDetail = { name, country, location, photo, cost, Ttime, visitor, discription, season }

        fetch(`https://my-tenth-assignment-server-one.vercel.app/spot/${loadedData._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(spotDetail)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                     Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                   navigate('/')
            }
        })


    }
    return (
        <div>
            <div className="bg-[#F4F3F0] md:p-4 lg:p-12 p-3">
                <h2 className="text-4xl text-pink-500 relative bottom-5 font-semibold">Update Tourist Spot</h2>
                <form onSubmit={handleUpdate}>
                    {/* Tourist spot and country row */}
                    <div className="lg:flex md:flex mb-4 lg:gap-3">
                        <div className="form-control lg:w-1/2 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourist Spot Name:</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.name}
                                    name="name"
                                    placeholder="Tourist Spot Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.country}
                                    name="country"
                                    placeholder="Country Name"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* Location and Discription row */}
                    <div className="lg:flex md:flex mb-4 lg:gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.location}
                                    name="location"
                                    placeholder="location"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="url"
                                    defaultValue={loadedData.photo}
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* consts and seasonality row */}
                    <div className="lg:flex md:flex mb-4 lg:gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Costs</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.cost}
                                    name="cost"
                                    placeholder="Costs"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>

                            <label className="input-group flex gap-10  relative pl-4 border-[1px] border-gray-300 rounded-md bg-white py-3 ">
                                <div className="flex gap-1">
                                    <input className="relative top-[1px]" type="radio" name="season" id="" value='summer' onChange={e => setSeason(e.target.value)} />Summer
                                </div>
                                <div className="flex gap-1">
                                    <input className="relative top-[1px]" type="radio" name="season" id="" value='winter' required onChange={e => setSeason(e.target.value)} />Winter
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* Travel time and visitor row */}
                    <div className="lg:flex md:flex mb-4 lg:gap-3">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.Ttime}
                                    name="time"
                                    placeholder="Travel Time"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Visitor per year</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.visitor}
                                    name="visitor"
                                    placeholder="Total Visitors"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Discription</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    defaultValue={loadedData.discription}
                                    name="discription"
                                    placeholder="Discription"
                                    className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Tourist Spot" className="btn btn-block bg-green-500 text-white text-xl" />

                </form>
            </div>
        </div>
    );
};

export default Update;