import Swal from 'sweetalert2';

const AddBrand = () => {

    const handleAddBrand = event => {
        event.preventDefault();
        const form = event.target;
        const brandName = form.brandName.value;
        const brandLogo = form.brandLogo.value;
        const brand = { brandLogo, brandName }
        console.log("Brand info: >>> \n", brand);

        fetch(`http://localhost:5000/brands`,{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(brand)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    form.reset();
                    // Swal.fire('Brand added successfully!')
                    Swal.fire({
                        icon: 'success',                        
                        title:'Brand added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })                    
                    console.log("Received data: >>>>\n",data);
                }
            })
    }

    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <h2 className="text-5xl text-center font-bold text-white my-10">Add Your Brand Details</h2>
            <form onSubmit={handleAddBrand} className="w-2/3 space-y-5 mx-auto text-black">

                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-white dark:text-white">Brand Name</label>
                    <input type="text" name="brandName" id="company" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand name" />
                </div>

                <div>
                    <label htmlFor="image" className="block mb-2 text-sm font-medium text-white dark:text-white">Brand Logo</label>
                    <input type="text" name="brandLogo" id="image" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brand logo url" />
                </div>
                <div className="mx-auto flex justify-center items-center py-5">
                    <button type="submit" className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Brand</button>
                </div>
            </form>

        </div>
    );
};

export default AddBrand;