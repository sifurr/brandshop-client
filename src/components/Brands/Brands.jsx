/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Brands = ({ brands }) => {

    return (
        <div>
            <h2 className="text-center text-5xl font-bold my-10">Featured Brands</h2>

            <section className="p-10 min-h-screen w-2/3 mx-auto flex md:flex-row justify-evenly gap-5 items-center bg-gray-800 flex-wrap sm:flex-col">
                {
                    brands.map(brand =>  
                        <Link key={brand._id} to={`/brand/${brand.brandName}`} >
                            <div className="h-64 w-64 relative cursor-pointer mb-5">
                                <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                                <div className="absolute inset-0 transform hover:scale-75 transition ease-in-out duration-300">
                                    <div className="h-full w-full bg-white rounded-lg shadow-2xl">
                                        <img src={brand.brandLogo} className="h-2/3 p-3 mx-auto" alt="" />
                                        <h2 className="text-3xl text-black pt-4 font-bold text-center">{brand.brandName}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>                

                    )
                }
            </section>


        </div>
    );
};

export default Brands;