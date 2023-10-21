import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { useEffect, useState } from "react";
import MyProduct from "../MyProduct/MyProduct";
import NoProduct from "../NoProduct/NoProduct";

const Brand = () => {
    const [products, setProducts] = useState([])
    const { brandName } = useParams();
    const images = [];

    for (let item of products) {
        images.push(item.image);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => {
                const receivedData = data.filter(prod => prod.brandName == brandName);
                setProducts(receivedData);

                // console.log(" data : ",data);          
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    // console.log("receivedBrandName: ",brandName);
    // console.log(" products : ",products);
    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="">
                <h2 className="text-center text-5xl font-bold text-white pb-5">My Brand <span className="text-orange-500">{brandName}</span></h2>
                {products.length !== 0 ?
                    <Slider brandName={brandName} images={images.slice(0, 3)}></Slider>
                    : ""
                }
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-2/3 mx-auto">
                {
                    products.length !== 0 ?
                        products.map(product => <MyProduct key={product._id} product={product}></MyProduct>)
                        : <div className="col-span-2 mt-[10%]"><NoProduct></NoProduct></div> 
                }
            </div>
        </div>
    );
};

export default Brand;