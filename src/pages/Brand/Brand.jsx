import { useParams } from "react-router-dom";
import { brands } from "../../components/Brands/Brands";
import { useEffect, useState } from "react";

const Brand = () => {
    const {id} = useParams();
    const allBrands = brands;
    const [brand, setBrand] = useState({})


    useEffect(()=>{
        const selectedBrand = allBrands.find(aBrand => aBrand.brandId == id);
        setBrand(selectedBrand);
    },[])

    console.log("Brand id: ",id, brand);
    return (
        <div>
            <div className="bg-gray-900 min-h-screen py-10">
                <h2 className="text-center text-5xl font-bold text-white">Brand Page of {brand.brandName} </h2>
            </div>
        </div>
    );
};

export default Brand;