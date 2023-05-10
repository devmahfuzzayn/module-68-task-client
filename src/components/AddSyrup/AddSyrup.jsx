import React from "react";
import Swal from "sweetalert2";

const AddSyrup = () => {
    const randomWords = [
        "win",
        "warn",
        "deck",
        "market",
        "leader",
        "active",
        "fare",
        "display",
        "native",
        "concentrate",
        "preparation",
        "update",
        "wind",
        "crash",
        "say",
        "dedicate",
        "sphere",
        "seize",
        "pleasure",
        "day",
        "blind",
        "cover",
        "lodge",
        "lounge",
        "nervous",
        "job",
        "coin",
        "shallow",
        "expectation",
        "change",
        "an",
        "treasurer",
        "cherry",
        "plaintiff",
        "candidate",
        "invite",
        "affect",
        "amuse",
        "echo",
        "jockey",
        "set",
        "reveal",
        "outside",
        "tire",
        "scheme",
        "fork",
        "throat",
        "implicit",
        "X-ray",
        "incredible",
        "connection",
        "laboratory",
        "abridge",
        "environmental",
        "survival",
        "medium",
        "battlefield",
        "jaw",
        "assertive",
        "pioneer",
        "frequency",
        "trust",
        "jungle",
        "grimace",
        "presence",
        "chorus",
        "strain",
        "waterfall",
        "coach",
        "smash",
        "result",
        "ignore",
        "slap",
        "mole",
        "convenience",
        "faith",
        "national",
        "wife",
        "appointment",
        "compartment",
        "opinion",
        "loud",
        "white",
        "overeat",
        "studio",
        "concentration",
        "accumulation",
        "rice",
        "language",
        "spring",
        "strap",
        "relinquish",
        "rack",
        "college",
        "law",
        "disorder",
        "of",
        "funeral",
        "occupy",
        "strange",
    ];

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

        fetch("http://localhost:5000/addSyrup", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(tea),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    title: "Syrup Added Successfully",
                    text: "Head over syrups route to see syrups",
                    icon: "success",
                    confirmButtonColor: "green",
                    confirmButtonText: "OK",
                }).then(() => {
                    window.location.reload();
                });
            });
    };

    return (
        <div className="add-syrup">
            <div className="bg-blue-50 p-24">
                <h2 className="text-3xl font-extrabold mb-4">Add a Syrup</h2>
                <form onSubmit={handleAddTea}>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Syrup Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Syrup Name"
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={
                                        randomWords[
                                            Math.floor(Math.random() * 50)
                                        ]
                                    }
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
                                    defaultValue={`https://picsum.photos/200/300?random=${Math.floor(
                                        Math.random() * 100
                                    )}`}
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>
                    <input
                        type="submit"
                        value="Add Syrup"
                        className="btn btn-block"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddSyrup;
