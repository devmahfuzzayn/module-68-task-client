import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SyrupCard from "../SyrupCard/SyrupCard";

const Syrups = () => {
    const loadedSyrups = useLoaderData();
    const [syrups, setSyrups] = useState(loadedSyrups);

    return (
        <div className="m-20">
            <h1 className="text-5xl text-center my-20 text-blue-600 font-semibold">
                Cold Cold Syrups: {syrups.length}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
                {syrups.map((syrup) => (
                    <SyrupCard
                        key={syrup._id}
                        syrup={syrup}
                        syrups={syrups}
                        setSyrups={setSyrups}
                    ></SyrupCard>
                ))}
            </div>
        </div>
    );
};

export default Syrups;
