import React from "react";

export default function Business({ business }) {
    return (
        <div className="Business">
            <img src={business.imageSrc} alt={business.name} />
            <h2>{business.name}</h2>
            <p>{business.address}</p>
            <p>{business.city}</p>
            <p>
                {business.state} {business.zipCode}
            </p>
            <p>{business.category}</p>
            <p>{business.rating} stars</p>
            <p>{business.reviewCount} reviews</p>
        </div>
    );
}
