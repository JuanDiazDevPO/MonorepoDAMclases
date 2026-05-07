import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm, RegisterForm } from "../../components/organism";
import { AuthStackParamList } from "../../Routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const RegisterPage = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const handleRegister = () =>{
        console.log("tap en iniciar sesion")
        navigation.navigate("Login")
    }

    return(
        <AuthTemplate title="Register" subtitle="Crear nueva cuenta">
            <RegisterForm onSubmit={handleRegister}>

            </RegisterForm>
        </AuthTemplate>
    )
}

export default RegisterPage;