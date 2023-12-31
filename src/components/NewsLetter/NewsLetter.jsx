const NewsLetter = () => {

    const handleNewsLetter = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        form.reset();
        console.log(email);
    }
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 my-10 lg:my-20">
            <h2 className="text-2xl lg:text-5xl font-bold dark:text-white text-black">News Letter @ </h2>
            <form onSubmit={handleNewsLetter} className="w-1/2 shadow-lg">
                <label htmlFor="email-address-icon" className="block -mt-7 mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </div>
                    <input type="email" name="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your@email.com" />
                    
                </div>
                <div className="">                    
                        <input type="submit" id="submit" className="bg-orange-500 border border-gray-300 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-600 dark:bg-orange-500 font-bold text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your@email.com" />                    
                </div>
                
                </form>

        </div>
    );
};

export default NewsLetter;