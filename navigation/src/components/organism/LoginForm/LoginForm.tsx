import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";



interface LoginFormProps {
 
    onSubmit: ()=> void;
}

const LoginForm = (
    {onSubmit}: LoginFormProps
) => {
    return(
        <View>
            <Text>
                Formulario Login
                <Button title="Login" onSubmit={onSubmit}></Button>
            </Text>

        </View>
    )
}

export default LoginForm;