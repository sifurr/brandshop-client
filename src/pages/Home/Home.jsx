import Team from "../../components/Team/Team";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import { useLoaderData } from "react-router-dom";


const Home = () => {  

    const loadedBrands = useLoaderData();

    // console.log("Loaded brands from home: ", loadedBrands)   

    return (
        <div className="pt-10 min-h-screen text-white">            
           <Banner></Banner>
           <hr />
            
           <Brands brands={loadedBrands}></Brands>   
           <hr />
           <Team products={loadedBrands}></Team>
           <hr />
           <NewsLetter></NewsLetter>
           <hr />        
        </div>
    );
};

export default Home;