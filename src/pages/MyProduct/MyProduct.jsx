/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyProduct = ({ product }) => {

    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="card glass">
                <figure><img src={product.image} className="h-[300px] object-cover" alt="car!" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{product.name}</h2>
                    <p>${product.price}</p>
                    <p>{product.type}</p>
                    <p>{product.rating}</p>

                    <div className="flex justify-center gap-5 ">
                        <div className="card-actions ">
                            <Link to={`/update/${product._id}`} className="btn btn-warning hover:bg-orange-400">Update</Link>
                        </div>
                        <div className="card-actions">
                            <Link to={`/details/${product._id}`} className="btn btn-warning hover:bg-orange-400">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;