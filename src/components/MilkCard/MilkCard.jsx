import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MilkCard = ({ milk, milks, setMilks }) => {
    const { _id, name, quantity, supplier, taste, photo } = milk;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("delete confirmed");
                fetch(`http://localhost:5000/milks/delete/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = milks.filter(
                                (milk) => milk._id !== _id
                            );
                            setMilks(remaining);
                            Swal.fire(
                                "Deleted!",
                                "Your Milk has been deleted.",
                                "success"
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className="milk-card card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={photo} alt="Milk Picture" />
            </figure>
            <div className="flex justify-around items-center w-full pr-4">
                <div className="space-y-1">
                    <h2 className="card-title text-2xl mb-2">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <button className="btn bg-green-500">View</button>
                        <Link to={`/milks/update/${_id}`}>
                            <button className="btn w-full bg-indigo-400 rounded-none">
                                Edit
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-500"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilkCard;
