import React from "react";
import Business from "../components /Business";

export default function BusinessList({business=[]}) {

    return (
        <div>
            {business.map((item, index) => (
                <Business key={index} item={item} />
            ))}
        </div>

    )
}