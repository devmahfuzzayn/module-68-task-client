import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MilkCard from "../MilkCard/MilkCard";

const Milks = () => {
    const loadedMilks = useLoaderData();
    const [milks, setMilks] = useState(loadedMilks);

    return (
        <div className="m-20">
            <h1 className="text-5xl text-center my-20 text-blue-600 font-semibold">
                Hot Hot Milks: {milks.length}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
                {milks.map((milk) => (
                    <MilkCard
                        key={milk._id}
                        milk={milk}
                        milks={milks}
                        setMilks={setMilks}
                    ></MilkCard>
                ))}
            </div>
        </div>
    );
};

export default Milks;
