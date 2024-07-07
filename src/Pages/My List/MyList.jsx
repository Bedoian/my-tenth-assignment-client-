import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyList = () => {
    const [emailData, setEmailData] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://my-tenth-assignment-server-one.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => setEmailData(data))
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                fetch(`https://my-tenth-assignment-server-one.vercel.app/spot/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            console.log('deleted')
                            const remaing = emailData.filter(user => user._id !== id)
                            setEmailData(remaing)
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className="overflow-x-auto mx-8">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="bg-teal-500  text-white text-lg">
                            <th>*</th>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Cost</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emailData.map(user => <tr key={user._id} className="bg-base-200">
                                <th>+</th>
                                <td className="text-lg font-medium">{user.name}</td>
                                <td className="text-lg text-red-500 font-medium">{user.country}</td>
                                <td className="text-blue-500 text-lg">€{user.cost}
                                </td>
                                <td className="flex gap-2 relative right-12">
                                    <Link to={`/update/${user._id}`}>
                                        <button className="btn bg-blue-500 text-white rounded-full hover:border-blue-500 hover:text-blue-500 hover:bg-white">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(user._id)} className="btn bg-red-500 rounded-full hover:bg-white hover:border-red-500 hover:text-red-500 text-white">Delete</button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;