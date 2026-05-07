import React from "react";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organism";
import { AuthStackParamList } from "../../Routes";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const LoginPage = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const handleLogin = () =>{
        console.log("tap en iniciar sesion")
        navigation.navigate("Register")
    }

    return(
        <AuthTemplate title="Login">
            <LoginForm onSubmit={handleLogin}></LoginForm>
        </AuthTemplate>
    )
}

export default LoginPage;