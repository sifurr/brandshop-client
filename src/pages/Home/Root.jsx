import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

const Root = () => {

    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme])

    const handleThemeToggler = () =>{
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }


    return (
        <div className="dark:bg-gray-900">
           <Header handleThemeToggler={handleThemeToggler}></Header>
          
           <Outlet></Outlet>
           
           <Footer></Footer>
        </div>
    );
};

export default Root;