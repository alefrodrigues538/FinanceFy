import { createRef } from "react";
import { TextInput, TextInputProps, ViewProps } from "react-native";
import Colors from "../constants/Colors";
import { Column, Paragraph, CustomTextProps, Row, ContainerProps } from "./GlobalComponents";

interface InputProps extends TextInputProps {
    containerProps?: ViewProps;
    right?: any;
    left?: any;
    required?: boolean;
    rounded?: boolean;
    labelContainerProps?: ContainerProps;
    labelProps?: CustomTextProps;
    label?: string;
    errorProps?: CustomTextProps;
    errorMessage?: string;
    error?: boolean;
}
export const Input: React.FC<InputProps> = ({
    containerProps,
    right,
    left,
    required,
    rounded,
    labelContainerProps,
    labelProps,
    label,
    errorProps,
    errorMessage,
    error,
    ...props
}) => {
    const inputRef = createRef<TextInput>();
    return (
        <Column {...containerProps}
            paddingHorizontal={8}
            width="100%">

            {label &&
                <Row {...labelContainerProps} width={"100%"} justifyContent="flex-start" alignItems="flex-start">
                    <Paragraph {...labelProps}
                        fontWeight="400"
                        fontSize={12}
                        title={label}
                    />
                    {required &&
                        <Paragraph title="*" color="red" />}
                </Row>}

            <Column
                onTouchStart={() => inputRef.current?.focus()}
                width="100%"
                backgroundColor={Colors.white}
                borderWidth={1}
                borderRadius={rounded ? 100 : 4}
                borderColor={Colors.gray}
                paddingHorizontal={rounded ? 16 : 8}
                paddingVertical={8}>

                <Row>
                    {left && <Column> {left} </Column>}

                    <TextInput {...props}
                        ref={inputRef}
                        style={{
                            width: "100%",
                        }} />

                    {right && <Column> {right} </Column>}
                </Row>
            </Column>


            <Paragraph {...errorProps}
                title={error ? errorMessage : ""}
                width="100%"
                color="red"
                fontWeight="300" />
        </Column>
    )
}