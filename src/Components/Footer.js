import React from "react";

export default function Footer({ totalAmount, resetQuantity }) {
    return (
        <div className="row fixed-bottom">
            <button
                className="btn col-2 btn-danger btn-lg rounded-0"
                onClick={() => {
                    resetQuantity();
                }}
            >
                Reset
            </button>
            <div className="text-white bg-dark col-8 text-center pt-2">
                <h2>Total Amount: {totalAmount}</h2>
            </div>
            <button className="btn col-2 btn-primary b-0 btn-lg rounded-0">
                Pay Now
            </button>
        </div>
    );
}
