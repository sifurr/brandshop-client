import Team from "../../components/Team/Team";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products = useLoaderData();
    // console.log(products);

    return (
        <div className="pt-10 bg-gray-900 min-h-screen text-white">            
           <Banner></Banner>
           <hr />
           <Brands products={products}></Brands>   
           <hr />
           <Team></Team>
           <hr />
           <NewsLetter></NewsLetter>
           <hr />        
        </div>
    );
};

export default Home;