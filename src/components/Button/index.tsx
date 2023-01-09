import React, { ReactNode } from 'react';
import { ButtonProps, TextProps, TextStyle, ViewStyle } from 'react-native';

import { Container, IconContainer, Text } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    containerStyle?: ViewStyle
    textStyle?: TextStyle
    RightIcon?: ReactNode
    LeftIcon?: ReactNode
    title: string,
    onPress: () => void,
}
const Button: React.FC<CustomButtonProps> = ({ title, RightIcon, LeftIcon, containerStyle, textStyle, onPress }, props) => {
    return (
        <Container
            style={[containerStyle, {
                shadowColor: "#999",
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
            }]}
            onPress={onPress}>

            {<IconContainer>{RightIcon}</IconContainer>}

            <Text
                style={textStyle}>{title}</Text>

            {<IconContainer>{LeftIcon}</IconContainer>}
        </Container>
    );
}

export default Button;