import httpCommon from "../core/http-common";
import LoginCommand from "../types/login-command";




const register = (payload : LoginCommand) => {
    return httpCommon.post("http://localhost:9091/v1/auth/register", payload);
}

const login = (payload : LoginCommand) => {
    return httpCommon.post("http://localhost:9091/v1/auth/login", payload);
}


const AuthService = {
    login,
    register,
};


export default AuthService;