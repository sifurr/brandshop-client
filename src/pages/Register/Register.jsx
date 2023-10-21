import Swal from 'sweetalert2';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from 'firebase/auth';


const Register = () => {

    const { register, googleLogin, setUser, logOut } = useContext(AuthContext);
    const [inputError, setInputError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation();
    const navigate = useNavigate();



    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const picture = form.picture.value;
        console.log(name, email, password, picture);

        const passwordConstraint = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

        if (!passwordConstraint.test(password)) {
            return setInputError(true);
        }

        register(email, password)
            .then((userCredential) => {
                // const newUserInfo = userCredential.user;

                updateProfile(userCredential.user, {
                    displayName:name,
                    photoURL: picture,
                })
                .then(()=> console.log("newly updated"))
                .catch(err => console.log(err)) 
                
                
                console.log("Registration successful", userCredential.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful! Login now!',
                    showConfirmButton: false,
                    timer: 1500
                })
                handleLogOut();
                navigate('/login');

            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    }




    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                setUser(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Registration successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setErrorMsg('')
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                setErrorMsg(err.message)
            })
    }


    const handleLogOut = () => {
        logOut()
            .then(() => console.log(""))
            .catch((error) => console.log(error));
    }




    return (
        <div className="bg-gray-900 min-h-screen py-10">
            <div className="w-2/3 lg:w-1/3 mx-auto pt-[5%]">
                {
                    inputError
                    &&
                    <div className="text-sm text-red-500 pb-5">
                        <small>
                            - is less than 6 characters
                        </small>
                        <br />
                        <small>
                            - don't have a capital letter
                        </small>
                        <br />
                        <small>
                            - don't have a special character
                        </small>
                    </div>
                }

                <form onSubmit={handleRegistration}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="password" name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="url" name="picture" id="picture" className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="picture" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profile picture [URL]</label>
                    </div>

                    <button type="submit" className="text-white block mx-auto bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                </form>
                <div className="mx-auto my-5">
                    <Link onClick={handleGoogleLogin} className="text-white block mx-auto bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login with Google</Link>
                    <p className="text-sm text-red-500 mb-10 text-center">
                        {
                            errorMsg ? errorMsg : ''
                        }
                    </p>
                    <p className="py-5 text-center text-white">Already a member? Login <span className="font-bold text-orange-500">
                        <Link to={'/login'}>here</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;