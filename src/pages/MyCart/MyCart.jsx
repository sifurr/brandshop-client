import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Rating from "react-rating";
import Swal from 'sweetalert2'


const MyCart = () => {
    const { user } = useContext(AuthContext);
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

    const handleDelete = id => {
        console.log(id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);

                        if (data.deletedCount > 0) {
                            // eslint-disable-next-line react/prop-types
                            const remainingProducts = products.filter(prod => prod._id !== id);
                            setProducts(remainingProducts);
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-center text-5xl font-bold text-white pb-10">My Cart Page</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-2/3 mx-auto">
                {
                    products.map((product, index) =>                      

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
                                    <button onClick={()=>handleDelete(product._id)} className="btn btn-error hover:bg-red-600 hover:text-white">Delete</button>
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