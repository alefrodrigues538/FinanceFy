import { Text, TextInput, TextInputProps, ViewProps } from "react-native";
import { Column, Paragraph, CustomTextProps, Row } from "./GlobalComponents";

interface InputProps extends TextInputProps {
    containerProps?: ViewProps;
    labelProps?: CustomTextProps;
    label?: string;
    errorProps?: CustomTextProps;
    errorMessage?: string;
    error?: boolean;
}
export const Input: React.FC<InputProps> = ({
    containerProps,
    labelProps,
    label,
    errorProps,
    errorMessage,
    error,
    ...props
}) => {

    return (
        <Column {...containerProps}
            width="100%"
            backgroundColor="#999">
            <Paragraph {...labelProps}
                title={label}
                width="100%" />

            <Row>
                <TextInput
                    {...props}
                    style={{
                        width: "100%",
                    }} />
            </Row>


            <Paragraph {...errorProps}
                title={error ? errorMessage : ""}
                width="100%"
                color="red"
                fontWeight="300" />
        </Column>
    )
}