import React from "react";
import { AuthTemplate } from "../components/templates";
import { LoginForm, RegisterForm } from "../components/organism";


const RegisterPage = () =>{

    return(
        <AuthTemplate title="Login">
            <RegisterForm></RegisterForm>
        </AuthTemplate>
    )
}

export default RegisterForm;