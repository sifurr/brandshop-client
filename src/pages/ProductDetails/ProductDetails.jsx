import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import { AuthContext } from "../../provider/AuthProvider";

const ProductDetails = () => {
    const { user } = useContext(AuthContext);
    const { email } = user;
    console.log("user email", typeof email);

    const [product, setProduct] = useState([]);
    const parameter = useParams();
    console.log("Id from details page: ", parameter.id);
    const { brandName, image, name, price, rating, shortDescription, type } = product;
    console.log(name);

    useEffect(() => {
        fetch(`https://brand-shop-server-side-ghmk6yp8z-saifurs-projects.vercel.app/products/${parameter.id}`)
            .then(res => res.json())
            .then(data => {
                console.log("single product data data : ", data);
                setProduct(data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const handleAddToCart = id => {

        // const _id = id;
        const cartRequest = true;
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
                        title: 'Product updated successfully!',
                        showConfirmButton: false,
                        timer: 1500

                    })
                }
            })
    }


    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-5xl text-center text-white font-bold">Details</h2>
            <div>
                <section className="py-20 font-poppins text-white">
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div className="sticky top-0 z-40 overflow-hidden ">
                                    <div className="relative mb-6 lg:mb-10 ">
                                        <img className="object-cover w-full lg:h-1/2" src={image} alt="" />
                                    </div>
                                    <div className="flex-wrap p-2 hidden -mx-2 md:flex">
                                        <div className="w-1/2 p-2 sm:w-1/4 bg-white">
                                            <Link className="block border border-transparent hover:border-orange-500" to="#">
                                                <img className="object-cover w-full lg:h-32" src={image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4 bg-red-600">
                                            <Link className="block border border-transparent hover:border-orange-500" to="#">
                                                <img className="object-cover w-full lg:h-32" src={image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4 bg-gray-400">
                                            <Link className="block border border-transparent hover:border-orange-500" to="#">
                                                <img className="object-cover w-full lg:h-32" src={image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="w-1/2 p-2 sm:w-1/4 bg-blue-800">
                                            <Link className="block border border-transparent hover:border-orange-500" to="#">
                                                <img className="object-cover w-full lg:h-32" src={image} alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-6 mt-6 border-t border-gray-300 dark:border-gray-400 ">
                                        <div className="flex items-center justify-center mt-6">
                                            <span className="mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-700 dark:text-gray-400 bi bi-chat-left-dots-fill" viewBox="0 0 16 16">
                                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                                </svg>
                                            </span>
                                            <div>
                                                <h2 className="text-sm font-bold text-white lg:text-lg dark:text-gray-400">
                                                    Have question about our product?</h2>
                                                <Link className="text-xs text-blue-400 lg:text-sm dark:text-blue-200" to="#">
                                                    Chat with our expert
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6 ">
                                        <span className="text-red-500 dark:text-red-200">New</span>
                                        <h2 className="max-w-xl mt-2 mb-4 text-3xl font-bold md:text-3xl font-heading dark:text-gray-300">
                                            <span className="text-orange-500">Buy</span> {name}
                                        </h2>
                                        <p className="max-w-md mb-4 text-gray-500 dark:text-gray-400">
                                            {shortDescription}
                                        </p>
                                        <Link to="/" className="text-orange-500 font-bold hover:underline dark:text-gray-400">
                                            {brandName}</Link>
                                    </div>
                                    <div className="mt-6">
                                        <p className="mb-2 text-lg font-semibold dark:text-gray-400">Info</p>
                                        <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <div className="mb-2 font-semibold dark:text-gray-400">
                                                            <span className="text-xs pr-3">Price:</span>${price}
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <div className="mb-2 font-semibold dark:text-gray-400">
                                                            <span className="text-xs pr-3">Rating</span>

                                                            <Rating className="pt-3"
                                                                initialRating={rating}
                                                                readonly

                                                            />

                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <div className="mb-2 font-semibold dark:text-gray-400">
                                                            <span className="text-xs pr-3">Category:</span>{type}
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="mb-4 text-lg font-semibold dark:text-gray-400">Choose your finish</p>
                                        <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">

                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-500 hover:border-orange-500">
                                                    <div>
                                                        <div className="w-8 h-8 mx-auto mb-2 bg-white rounded-full dark:bg-gray-600">
                                                        </div>
                                                        <p className="text-xs text-center text-white dark:text-gray-400">
                                                            White
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-500 hover:border-orange-500">
                                                    <div>
                                                        <div className="w-8 h-8 mx-auto mb-2 bg-red-500 rounded-full">
                                                        </div>
                                                        <p className="text-xs text-center text-white dark:text-gray-400">
                                                            Red
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-500 hover:border-orange-500">
                                                    <div>
                                                        <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-gray-400">
                                                        </div>
                                                        <p className="text-xs text-center text-white dark:text-gray-400">
                                                            Silver
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-500 hover:border-orange-500">
                                                    <div>
                                                        <div className="w-8 h-8 mx-auto mb-2 bg-blue-900 rounded-full">
                                                        </div>
                                                        <p className="text-xs text-center text-white dark:text-gray-400">
                                                            Blue
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="mb-2 text-lg font-semibold dark:text-gray-400">Option</p>
                                        <Link to="#" className="text-blue-500 hover:underline dark:text-gray-400">
                                            What is right for you?</Link>
                                        <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <div className="mb-2 font-semibold dark:text-gray-400">
                                                            Brand New
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full py-4 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <div className="mb-2 font-semibold dark:text-gray-400">
                                                            Reconditioned
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <p className="mb-4 text-lg font-semibold dark:text-gray-400">Choose payment type</p>
                                        <div className="grid grid-cols-2 gap-4 pb-4 mt-2 mb-4 border-b-2 border-gray-300 lg:grid-cols-3 dark:border-gray-600">
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <p className="px-2 text-base font-semibold text-center text-white dark:text-gray-400">
                                                            Pay in full
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div>
                                                <button className="flex items-center justify-center w-full h-full px-2 py-6 border-2 border-gray-300 dark:hover:border-orange-500 dark:border-gray-600 hover:border-orange-500">
                                                    <div>
                                                        <p className="px-2 text-base font-semibold text-center text-white dark:text-gray-400">
                                                            Pay monthly
                                                        </p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 ">
                                        <div className="flex flex-wrap items-center">
                                            <span className="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-white dark:text-gray-400 bi bi-truck" viewBox="0 0 16 16">
                                                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
                                                </svg>
                                            </span>
                                            <h2 className="text-lg font-bold text-white dark:text-gray-400">Delivery</h2>
                                        </div>
                                        <div className="px-7">
                                            <p className="mb-2 text-sm dark:text-gray-400">In Stock</p>
                                            <p className="mb-2 text-sm dark:text-gray-400">Free Shipping</p>
                                            <Link className="mb-2 text-sm text-blue-400 dark:text-blue-200" to="#">Get delivery dates</Link>
                                        </div>
                                    </div>
                                    <div className="mt-6 ">
                                        <div className="flex flex-wrap items-center">
                                            <span className="mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-white dark:text-gray-400 bi bi-bag" viewBox="0 0 16 16">
                                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                                                </svg>
                                            </span>
                                            <h2 className="text-lg font-bold text-white dark:text-gray-400">Pickup</h2>
                                        </div>
                                        <div className="px-7">
                                            <Link className="mb-2 text-sm text-blue-400 dark:text-blue-200" to="#">Check availability</Link>
                                        </div>
                                    </div>
                                    <div className="mt-6 ">

                                        <button onClick={() => handleAddToCart(parameter.id)} className="w-full px-4 py-2 font-bold text-white bg-orange-500 hover:bg-orange-600 lg:w-96">
                                            Add to Cart
                                        </button>
                                    </div>
                                    <div className="flex items-center mt-6 ">
                                        <div>
                                            <h2 className="mb-2 text-lg font-bold text-white dark:text-gray-400">Still deciding?
                                            </h2>
                                            <p className="mb-2 text-sm dark:text-gray-400"> You are always welcome for any query! </p>
                                        </div>
                                        <span className="ml-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400" viewBox="0 0 16 16">
                                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                                            </svg></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetails;