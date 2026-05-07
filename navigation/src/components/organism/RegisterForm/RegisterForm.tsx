import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../atoms";

interface RegisterFormProps {
 
    onSubmit: ()=> void;
}
const RegisterForm = (
    {onSubmit}: RegisterFormProps
) => {
    return(
        <View>
            <Text>
                Formulario Register
                <Button title= "Registrar"
                onSubmit={onSubmit}></Button> 
            </Text>

        </View>
    )
}

export default RegisterForm;