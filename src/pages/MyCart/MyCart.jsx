import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Rating from "react-rating";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    const navigate = useNavigate();
    // console.log("user email", user?.email, typeof user?.email);
    // const [carts, setCarts] = useState([]);
    // const [cart] = carts;
    const [products, setProducts] = useState([]);
    // const { brandName, image, name, price, rating, shortDescription, type } = products;
    // console.log("Carts from my cart", carts);
    console.log("Products from my cart", products);




    // okay fetch product from product collection
    useEffect(() => {
        fetch(`https://brand-shop-server-side-ghmk6yp8z-saifurs-projects.vercel.app/products`)
            .then(res => res.json())
            .then(data => {
                // console.log("cart products from database : ", data);
                const filteredProduct = data.filter(prod => prod?.email === email && prod?.cartRequest == true);
                console.log("Filtered Product:  ", filteredProduct);
                setProducts(filteredProduct);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])





    const handleDelete = id => {

        const cartRequest = false;
        const addedProductId = { cartRequest };
        console.log("cart request info: >>> \n", cartRequest);

        fetch(`https://brand-shop-server-side-ghmk6yp8z-saifurs-projects.vercel.app/products/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(addedProductId)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("Patch data info: ",data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product deleted from your cart successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                navigate('/');
            })
    }


    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-center text-5xl font-bold text-white pb-10">My Cart</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-2/3 mx-auto">
                {
                    products.length > 0 && products.map((product, index) =>

                        <div key={index} className="card bg-base-100 shadow-xl">
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
                                    <Link to={`/details/${product._id}`} className="py-2 px-4 font-bold rounded te4xt-xl bg-orange-500 hover:bg-orange-600 text-white">Details</Link>
                                    <button onClick={() => handleDelete(product._id)} className="py-2 px-4 font-bold rounded te4xt-xl bg-orange-500 hover:bg-red-500 text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    products.length == 0 &&
                    <div className="col-span-2 mt-[5%] ">
                        <h2 className="text-3xl text-center dark:text-white text-white font-bold">Your cart is empty!</h2>
                        <p className="text-lg text-center dark:text-white text-white">Because, either you deleted products from your cart or you did not add any products! <br /> Please add products first using <Link className="font-bold text-orange-500" to={'/add-product'}>Add Product</Link> menu to add them on your cart.</p>
                    </div>
                }

            </div>
        </div>
    );
};

export default MyCart;