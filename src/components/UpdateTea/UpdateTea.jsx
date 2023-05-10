import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTea = () => {
    const tea = useLoaderData();
    const { _id, name, quantity, supplier, taste, category, details, photo } =
        tea;

    const handleAddTea = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const tea = {
            name,
            quantity,
            supplier,
            taste,
            category,
            details,
            photo,
        };
        console.log(tea);

        fetch(`http://localhost:5000/teas/update/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(tea),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    title: "Tea Updated Successfully",
                    text: "Head over teas route to see teas",
                    icon: "success",
                    confirmButtonColor: "green",
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.reload();
                });
            });
    };

    return (
        <div className="update-tea">
            <div className="bg-blue-50 p-24">
                <h2 className="text-3xl font-extrabold mb-4">
                    Update Tea ID: {_id}
                </h2>
                <form onSubmit={handleAddTea}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tea Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tea Name"
                                    defaultValue={name}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">
                                    Available Quantity
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="quantity"
                                    placeholder="Available Quantity"
                                    defaultValue={quantity}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">
                                    Supplier Name
                                </span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="supplier"
                                    placeholder="Supplier Name"
                                    defaultValue={supplier}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="taste"
                                    placeholder="Taste"
                                    defaultValue={taste}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Category"
                                    defaultValue={category}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="details"
                                    placeholder="Details"
                                    defaultValue={details}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    defaultValue={photo}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Update Tea"
                        className="btn btn-block"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateTea;
