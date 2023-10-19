/* eslint-disable react/prop-types */


const MyProduct = ({product}) => {
  
    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="card glass">
                <figure><img src={product.image} className="h-[300px]" alt="car!" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">{product.name}</h2>
                    <p>${product.price}</p>
                    <div className="card-actions justify-end flex flex-col flex-grow">
                        <button className="btn btn-warning mx-auto">Know more!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;