import React from "react";
import { AuthTemplate } from "../components/templates";
import { LoginForm } from "../components/organism";


const LoginPage = () =>{

    return(
        <AuthTemplate title="Login">
            <LoginForm></LoginForm>
        </AuthTemplate>
    )
}

export default LoginForm;