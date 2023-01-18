import React from 'react';
import Colors from '../constants/Colors';
import { Button, ButtonProps, Container, CustomImageProps, ImageCustom, Paragraph, Row } from './GlobalComponents';

interface props extends ButtonProps {
    iconProps?: CustomImageProps
}
const SignInWithGoogle: React.FC<props> = ({ iconProps, ...props }) => {
    return (
        <Button {...props}
            variation={"light"}
            paddingHorizontal={8}
            paddingVertical={16}
            leftElement={
                <ImageCustom {...iconProps}
                    resizeMode="contain" height={40} width={40}
                    source={require("../assets/images/google-logo.png")} />
            }
            title='Entrar com o Google'
            shadowColor='#000'
            shadowOpacity={0.27}
            shadowRadius={4.65}
            elevation={2}
            borderColor={Colors.lightGray}
            borderWidth={1}
        />
    )
}

export default SignInWithGoogle;