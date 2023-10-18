const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gray-900">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/car-toyota.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="w-[50%]">
                        <h1 className="text-5xl font-bold">Great Launch!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="bg-[#26bdf8] text-gray-700 font-bold hover:bg-[#2688f8c0] hover:text-white scale-100 hover:scale-125 transition ease-in-out delay-150 duration-500 px-4 py-2">Let's Drive</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;