const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const product = {name,image,brandName,type,price,shortDescription, rating}
        // console.log("Product info: >>> \n",product);

        fetch(`http://localhost:5000/products`,{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    form.reset();
                    alert("Product added");
                    console.log("Received data: >>>>\n",data);
                }
            })
    }

    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-5xl text-center font-bold text-white my-10">Add Your Product</h2>
            <form onSubmit={handleAddProduct} className="w-2/3 mx-auto text-black">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-white">Name</label>
                        <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product title"  />
                    </div>
                    <div>
                        <label htmlFor="image" className="block mb-2 text-sm font-medium text-white dark:text-white">Image</label>
                        <input type="text" name="image" id="image" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product image url"  />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-white dark:text-white">Brand Name</label>
                        <input type="text" name="brandName" id="company" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand name"  />
                    </div>
                    <div>                        
                        <label htmlFor="type" className="block mb-2 text-sm font-medium text-white dark:text-white">Type</label>
                        <select id="type" name="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select a product type</option>
                            <option value="sedan">Sedan</option>
                            <option value="suv">SUV</option>
                            <option value="coupe">Coupe</option>
                            <option value="convertible">Convertible</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 text-sm font-medium text-white dark:text-white">Price</label>
                        <input type="text" name="price" id="website" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price"  />
                    </div>

                </div>
                <div className="mb-6">
                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-white dark:text-white">Short Description</label>
                    <textarea type="text" name="shortDescription" id="rating" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-white dark:text-white">Rating</label>
                    <input type="text" id="rating" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating"  />
                </div>

                <button type="submit" className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>

        </div>
    );
};

export default AddProduct;