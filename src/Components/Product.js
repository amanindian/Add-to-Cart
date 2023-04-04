import React from 'react'

export default function Product({ incrimentQuantity, decrementQuantity, product, index, deleteProduct }) {
    return (
        <div className="row">
            <div className="col-5">
                <h3 style={{
                    overflow: "auto"
                }}>{product.Name} <span className="badge bg-secondary">Rs. {product.Price}</span></h3>
            </div>
            <div className="col-3">
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={() => { decrementQuantity(index) }}>-</button>
                    <button type="button" className="btn btn-warning">{product.Quantity}</button>
                    <button type="button" className="btn btn-success" onClick={() => { incrimentQuantity(index) }}>+</button>
                </div>
            </div>
            <div className="col-2">
                {product.Quantity * product.Price}
            </div>
            <button className="btn col-2 btn-danger my-1" onClick={() => {
                deleteProduct(index)
            }}>Remove</button>
        </div>
    )
}
