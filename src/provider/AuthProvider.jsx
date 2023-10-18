import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const contents = {
        test: "This is a test!"
    }
    return (
        <AuthContext.Provider value={contents}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;