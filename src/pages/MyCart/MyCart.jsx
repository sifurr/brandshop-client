import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Rating from "react-rating";


const MyCart = () => {
    const { user, setLoading, loading } = useContext(AuthContext);
    const { email } = user
    // console.log("user email", user?.email, typeof user?.email);

    const [carts, setCarts] = useState([]);
    const [cart] = carts;
    const [products, setProducts] = useState([]);
    // const { brandName, image, name, price, rating, shortDescription, type } = products;
    console.log("Product after update", products)



    useEffect(() => {
        fetch(`http://localhost:5000/carts`)
            .then(res => res.json())
            .then(data => {
                // console.log("cart data from database : ", data);
                setCarts(data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                // console.log("cart products from database : ", data);
                const filteredProduct = data.filter(prod => prod?.email === email);
                console.log("Filtered Product:  ", filteredProduct);
                setProducts(filteredProduct);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-center text-5xl font-bold text-white pb-10">My Cart Page</h2>
            <div className="grid grid-cols-2 gap-10 w-2/3 mx-auto">
                {
                    products.map((product, index) =>                      

                        <div key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={product.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.name}</h2>
                                <p>${product.price}</p>
                                <p>
                                    <Rating className="pt-3"
                                        initialRating={parseInt(product.rating)}
                                        readonly

                                    />
                                </p>
                                <p>Brand: {product.brandName}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-error hover:bg-red-600 hover:text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default MyCart;