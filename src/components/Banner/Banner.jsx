import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/3ffK8Gd/TESLA-REFERENCES-1961.jpg" className="animate-pulse lg:max-w-lg object-cover rounded-lg shadow-2xl" />
                    <div className="w-[80%] lg:w-[40%]">
                        <h1 className="text-5xl text-blue-800 font-bold">Unveiling the Future</h1>
                        <p className="py-6 text-black dark:text-white">Welcome to an extraordinary journey of innovation in motion! Join us as we unveil the future of automotive excellence.</p>
                        <Link to={'/register'} className="dark:animate-pulse bg-orange-500 text-gray-white font-bold hover:bg-orange-600  scale-100 hover:scale-125 transition ease-in-out delay-150 duration-500 px-4 py-2">Let's Drive</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;