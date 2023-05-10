import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TeaCard from "../TeaCard/TeaCard";

const Teas = () => {
    const loadedTeas = useLoaderData();
    const [teas, setTeas] = useState(loadedTeas);

    return (
        <div className="m-20">
            <h1 className="text-5xl text-center my-20 text-blue-600 font-semibold">
                Hot Hot Teas: {teas.length}
            </h1>
            <div className="grid md:grid-cols-2 gap-4">
                {teas.map((tea) => (
                    <TeaCard
                        key={tea._id}
                        tea={tea}
                        teas={teas}
                        setTeas={setTeas}
                    ></TeaCard>
                ))}
            </div>
        </div>
    );
};

export default Teas;
