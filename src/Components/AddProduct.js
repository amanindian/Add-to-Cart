import React, { useState } from "react";

export default function AddProduct({ AddProductInList, Popup }) {
    const [productName, setProductName] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (productName === "" || amount <= 0 || amount === "") {
            Popup({
                type: "danger",
                msg:
                    (productName === "" && amount === "") ||
                        (productName === "" && amount === 0)
                        ? "Both text feild is blank"
                        : productName === ""
                            ? "Product Name is Blank"
                            : amount === 0
                                ? "Amount value is Zero"
                                : amount <= 0
                                    ? "Product Amount is invalid value"
                                    : "Product Amount is Blank",
            });
        } else {
            console.log(amount);
            AddProductInList({
                Name: productName,
                Price: amount,
                Quantity: 0,
            });
        }
    };

    return (
        <>
            <form className="mb-5" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Amount
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Product Amount"
                        id="exampleInputPassword1"
                        onChange={(e) => setAmount(Number.parseInt(e.target.value))}
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-3 btn-lg">
                    Add Product
                </button>
            </form>
        </>
    );
}
