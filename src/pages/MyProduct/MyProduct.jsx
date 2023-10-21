/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { Link } from "react-router-dom";


const MyProduct = ({ product }) => {

    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="card glass">
                <figure><img src={product.image} className="h-[300px] object-cover" alt="car!" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title capitalize">{product.name}</h2>
                    <h2 className="card-title capitalize text-orange-500">{product.brandName}</h2>
                    <p className="capitalize lg:font-bold">Price: ${product.price}</p>
                    <p className="capitalize lg:font-bold">Category: {product.type}</p>
                    <p className="py-3">
                        <Rating className="pt-3"
                            initialRating={product.rating}
                            readonly

                        />
                    </p>
                    

                    <div className="flex justify-center gap-2 lg:gap-4">
                        <div className="card-actions ">
                            <Link to={`/update/${product._id}`} className="py-2 px-2 lg:px-4  font-bold text-xl rounded bg-orange-500 hover:bg-orange-600">Update</Link>
                        </div>
                        <div className="card-actions">
                            <Link to={`/details/${product._id}`} className="py-2 px-2 lg:px-4  font-bold text-xl rounded bg-orange-500 hover:bg-orange-600">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;