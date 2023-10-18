import Team from "../../components/Team/Team";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const Home = () => {
    return (
        <div className="pt-10 bg-gray-900 min-h-screen text-white">            
           <Banner></Banner>
           <hr />
           <Brands></Brands>   
           <hr />
           <Team></Team>
           <hr />
           <NewsLetter></NewsLetter>
           <hr />        
        </div>
    );
};

export default Home;