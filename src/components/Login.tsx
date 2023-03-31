import { ChangeEvent, useState } from "react";
import AuthService from "../service/auth-service";
import BaseUser from "../types/base-user";
import LoginCommand from "../types/login-command";





const Login: React.FC = () => {
    let loginInit = {
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState<BaseUser>(loginInit);
    const [token, setToken] = useState<string>("");
    

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
    
        setUser({...user, [name]: value});
    };

    const login = () => {
        const data = {
            email: "",
            password: ""
        };
        AuthService.login(data as LoginCommand) 
            .then((res :any) => {
                setUser({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    password: res.data.password
                })
                localStorage.setItem("user", "user");
                
            }) 
    }


    return (
        <div></div>
    );
}


export default Login;