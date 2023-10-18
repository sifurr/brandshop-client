const Brands = () => {
    const brands = [
        // Toyota, Ford, BMW, Mercedes-Benz, Tesla, Honda
        { brandName: "Toyota", image: 'logo-toyota.png' },
        { brandName: "Ford", image: 'logo-toyota.png' },
        { brandName: "BMW", image: 'logo-toyota.png' },
        { brandName: "Mercedes-Benz", image: 'logo-toyota.png' },
        { brandName: "Tesla", image: 'logo-toyota.png' },
        { brandName: "Honda", image: 'logo-toyota.png' }
    ]
    return (
        <div>
           
            <h2 className="text-center text-5xl font-bold my-10">Featured Brands</h2>

            <section className="p-10 min-h-screen w-2/3 mx-auto flex md:flex-row justify-evenly gap-5 items-center bg-gray-800 flex-wrap sm:flex-col">

                {
                    brands.map((brand, index) =>
                        <div key={index} className="h-64 w-64 relative cursor-pointer mb-5">
                            <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
                            <div className="absolute inset-0 transform hover:scale-75 transition ease-in-out duration-300">
                                <div className="h-full w-full bg-white rounded-lg shadow-2xl">
                                    <img src={brand.image} className="h-2/3 mx-auto" alt="" />
                                    <h2 className="text-3xl text-black font-bold text-center">{brand.brandName}</h2>

                                </div>
                            </div>
                        </div>
                    )
                }




            </section>
        </div>
    );
};

export default Brands;