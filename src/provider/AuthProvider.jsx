import { createContext } from "react";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const contents = {

    }
    
    return (
        <AuthContext.Provider value={contents}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;