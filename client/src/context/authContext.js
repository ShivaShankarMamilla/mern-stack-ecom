import {useState,useEffect,useContext,createContext} from "react";

const AuthContext = createContext() //similar to creating rest object

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({user:null,token:""}) //we can use this anywhere in out app

    useEffect(()=>{
        const data = localStorage.getItem("auth");
        if(data){
            const parsedData = JSON.parse(data);
            setAuth({
                ...auth,
                user:parsedData.user,
                token: parsedData.token,
            })
        }
    },[])


return(
    <AuthContext.Provider value={[auth,setAuth]}>
        {children}
    </AuthContext.Provider>
)
}

//custom hook
const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}

//after this we configure it in index.js file