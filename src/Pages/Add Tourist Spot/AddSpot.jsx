import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";

const AddSpot = () => {
    const [season, setSeason] = useState();
    const{user}=useContext(AuthContext)

    const handleAddSpots = e => {
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
        const email=user.email

        const spotDetail = { name, country, location, photo, cost, Ttime, visitor, discription, season,email }

        // send spot data to the server
         fetch('https://my-tenth-assignment-server-one.vercel.app/spot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spotDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Continue'
                      })
                      form.reset()
                }
            })
      

            
    }

    return (
        <div className="bg-[#F4F3F0] md:p-4 lg:p-12 p-3">
            <h2 className="text-4xl text-green-500 relative bottom-5 font-semibold">Add Tourist Spot</h2>
            <form onSubmit={handleAddSpots}>
                {/* Tourist spot and country row */}
                <div className="lg:flex md:flex mb-4 lg:gap-3">
                    <div className="form-control lg:w-1/2 md:w-1/2">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name:</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
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
                                <input className="relative top-[1px]" type="radio" name="season" id="" value='winter' onChange={e => setSeason(e.target.value)} />Winter
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
                                name="discription"
                                placeholder="Discription"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tourist Spot" className="btn btn-block bg-pink-500 text-white text-xl" />
                <p className="text-lg ">Wanna Add country data?<Link to='/addCountry' className="link-hover text-blue-500">Visit</Link></p>

            </form>
        </div>
    );
};

export default AddSpot;