import React from 'react';
import { Text, TextProps, View, ViewProps } from "react-native";
import Colors from '../constants/Colors';

//CONTAINER---------------------------------------------------
export interface ContainerProps extends ViewProps {
    flex?: number;
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    borderRightWidth?: number;
    borderLeftWidth?: number;
    borderBottomWidth?: number;
    borderTopWidth?: number;
    borderTopColor?: string;
    borderRightColor?: string;
    borderLeftColor?: string;
    borderBottomColor?: string;
    borderRadius?: number;
    padding?: number | string;
    paddingVertical?: number | string;
    paddingHorizontal?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    margin?: number | string;
    marginVertical?: number | string;
    marginHorizontal?: number | string;
    marginRight?: number | string;
    marginLeft?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    alignItems?: "center" | "flex-start" | "flex-end" | undefined;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
}
export const Container: React.FC<ContainerProps> = ({
    flex,
    width,
    height,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRightWidth,
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderTopColor,
    borderRightColor,
    borderLeftColor,
    borderBottomColor,
    borderRadius,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginVertical,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    flexDirection,
    alignItems,
    justifyContent,
    ...props
}) => (
    <View {...props}
        style={{
            flex: 1,
            width,
            height,
            alignItems: alignItems || "center",
            justifyContent: justifyContent || "center",
            backgroundColor,
            borderColor,
            borderWidth,
            borderRightWidth,
            borderLeftWidth,
            borderBottomWidth,
            borderTopWidth,
            borderTopColor,
            borderRightColor,
            borderLeftColor,
            borderBottomColor,
            borderRadius,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginVertical,
            marginHorizontal,
            marginLeft,
            marginRight,
            marginBottom,
            marginTop,
            flexDirection,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//ROW---------------------------------------------------------
export const Row: React.FC<ContainerProps> = ({
    flex,
    width,
    height,
    flexDirection,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRightWidth,
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderTopColor,
    borderRightColor,
    borderLeftColor,
    borderBottomColor,
    borderRadius,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginVertical,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    ...props
}) => (
    <View {...props}
        style={{
            flex,
            flexDirection: flexDirection || "row",
            alignItems: "center",
            justifyContent: "center",
            width: width || undefined,
            height: height || undefined,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRightWidth,
            borderLeftWidth,
            borderBottomWidth,
            borderTopWidth,
            borderTopColor,
            borderRightColor,
            borderLeftColor,
            borderBottomColor,
            borderRadius,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginVertical,
            marginHorizontal,
            marginLeft,
            marginRight,
            marginBottom,
            marginTop,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//COLUMN------------------------------------------------------
export const Column: React.FC<ContainerProps> = ({
    flex,
    width,
    height,
    flexDirection,
    backgroundColor,
    borderColor,
    borderWidth,
    borderRightWidth,
    borderLeftWidth,
    borderBottomWidth,
    borderTopWidth,
    borderTopColor,
    borderRightColor,
    borderLeftColor,
    borderBottomColor,
    borderRadius,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginVertical,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    ...props
}) => (
    <View {...props}
        style={{
            flex,
            flexDirection: flexDirection || "column",
            alignItems: "center",
            justifyContent: "center",
            width: width || undefined,
            height: height || undefined,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRightWidth,
            borderLeftWidth,
            borderBottomWidth,
            borderTopWidth,
            borderTopColor,
            borderRightColor,
            borderLeftColor,
            borderBottomColor,
            borderRadius,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginVertical,
            marginHorizontal,
            marginLeft,
            marginRight,
            marginBottom,
            marginTop,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//HEADING-----------------------------------------------------
export interface CustomTextProps extends TextProps {
    title?: string;
    width?: number | string | undefined;
    height?: number | string | undefined;
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    fontWeight?: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
    textAlign?: "center" | "auto" | "left" | "right" | "justify" | undefined
    textAlignVertical?: "center" | "auto" | "top" | "bottom" | undefined;
    lineHeight?: number;
    padding?: number | string;
    paddingVertical?: number | string;
    paddingHorizontal?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    margin?: number | string;
    marginVertical?: number | string;
    marginHorizontal?: number | string;
    marginRight?: number | string;
    marginLeft?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
}
export const Heading: React.FC<CustomTextProps> = ({
    title,
    width,
    height,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    textAlign,
    textAlignVertical,
    lineHeight,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginVertical,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    ...props
}) => (
    <Text {...props}
        style={{
            height: height || undefined,
            width: width || undefined,
            backgroundColor: backgroundColor || "transparent",
            color: color || Colors.primary,
            fontSize: fontSize || 22,
            fontWeight: fontWeight || "bold",
            textAlign: textAlign || "left",
            textAlignVertical: textAlignVertical || "center",
            lineHeight: lineHeight,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginVertical,
            marginHorizontal,
            marginLeft,
            marginRight,
            marginBottom,
            marginTop,
        }}>{title}</Text>
)
//------------------------------------------------------------


//PARAGRAPH---------------------------------------------------
export const Paragraph: React.FC<CustomTextProps> = ({
    title,
    width,
    height,
    backgroundColor,
    color,
    fontSize,
    fontWeight,
    textAlign,
    textAlignVertical,
    lineHeight,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginVertical,
    marginHorizontal,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    ...props
}) => (
    <Text {...props}
        style={{
            backgroundColor: backgroundColor || "transparent",
            color: color || Colors.primary,
            fontSize: fontSize || 14,
            fontWeight: fontWeight || "normal",
            textAlign: textAlign || "left",
            textAlignVertical: textAlignVertical || "center",
            lineHeight,
            height: height || undefined,
            width: width || undefined,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
            margin,
            marginVertical,
            marginHorizontal,
            marginLeft,
            marginRight,
            marginBottom,
            marginTop,
        }}>{title}</Text>
)
//--------------------------------------------------------