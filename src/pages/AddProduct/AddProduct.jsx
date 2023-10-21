import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';



const AddProduct = () => {

    const {user} = useContext(AuthContext);
    const {email} = user;
    console.log("user email",typeof email);

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
        const cartRequest = false;
        const product = {name,image,brandName,type,price,shortDescription, rating, email, cartRequest}
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
                    Swal.fire({
                        icon: 'success',                        
                        title:'Product added successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
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
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-white dark:text-white">Short Description</label>
                    <textarea name="shortDescription" id="description" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short description"  />
                </div>
                <div className="mb-6">
                    <label htmlFor="rating" className="block mb-2 text-sm font-medium text-white dark:text-white">Rating</label>
                    <input name="rating" type="text" id="rating" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating"  />
                </div>

                <button type="submit" className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Product</button>
            </form>

        </div>
    );
};

export default AddProduct;




/* 
{"_id":{"$oid":"652fdc218040696aa15102dd"},"name":"Toyota suv","image":"https://di-uploads-pod13.dealerinspire.com/toyotaofdowntownla/uploads/2020/05/2020-Toyota-C-HR-lineup-image.png","brandName":"Toyota","type":"suv","price":"38150","shortDescription":"The price range for the Toyota C-HR varies based on the trim level you choose.","rating":""}

{"_id":{"$oid":"6530379f9b01308a01889fff"},"name":"Toyota Night Shade","image":"https://i.ibb.co/sKwLyLk/1670877167-Camry-SE-Trim.jpg","brandName":"Toyota","type":"sedan","price":"50000","shortDescription":"Lets blaze the night","rating":"4"}


{"_id":{"$oid":"652fdc218040696aa15102dd"},"name":"Toyota suv","image":"https://di-uploads-pod13.dealerinspire.com/toyotaofdowntownla/uploads/2020/05/2020-Toyota-C-HR-lineup-image.png","brandName":"Toyota","type":"suv","price":"38150","shortDescription":"The price range for the Toyota C-HR varies based on the trim level you choose.","rating":"","email":"kaka@kaki.com"}


{"_id":{"$oid":"65324da9828db1ebc4173337"},"name":"BMW Design Boss: Why Do EVs Need To Look Different","image":"https://i.ibb.co/R3vkMfD/bmw-i5-edrive40-2023.jpg","brandName":"BMW","type":"Select a product type","price":"200000","shortDescription":"Head of BMW Brand Design Domagoj Dukec doesn’t understand automakers adopting EV-specific design language.","rating":"","email":"kaka@kaki.com"}


*/