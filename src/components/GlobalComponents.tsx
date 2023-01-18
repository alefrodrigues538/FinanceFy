import React from 'react';
import { Image, ImageProps, Text, TextProps, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from "react-native";
import Colors from '../constants/Colors';
import { screenHeight, screenWidth } from '../hooks/useDimensions';

//CONTAINER---------------------------------------------------
export interface ContainerProps extends ViewProps {
    flex?: number;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    height?: number | string;
    maxHeight?: number | string;
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
    position?: "relative" | "absolute" | undefined;
    top?: number | string | undefined;
    right?: number | string | undefined;
    bottom?: number | string | undefined;
    left?: number | string | undefined;
    flexDirection?: "row" | "column" | "row-reverse" | "column-reverse" | undefined;
    alignItems?: "center" | "flex-start" | "flex-end" | undefined;
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
    shadowColor?: string;
    shadowOffset?: {
        width: number,
        height: number
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
}
export const Container: React.FC<ContainerProps> = ({
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
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
    position,
    top,
    right,
    bottom,
    left,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    ...props
}) => (
    <View {...props}
        style={{
            flex: 1,
            minWidth: minWidth || undefined,
            width: width || undefined,
            maxWidth: maxWidth || undefined,
            minHeight: minHeight || undefined,
            height: height || undefined,
            maxHeight: maxHeight || undefined,
            alignItems: alignItems || "center",
            justifyContent: justifyContent || "center",
            backgroundColor: backgroundColor || Colors.white,
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
            position,
            top,
            right,
            bottom,
            left,
            shadowColor,
            shadowOffset,
            shadowOpacity,
            shadowRadius,
            elevation,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//ROW---------------------------------------------------------
export const Row: React.FC<ContainerProps> = ({
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    flexDirection,
    alignItems,
    justifyContent,
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
    position,
    top,
    right,
    bottom,
    left,
    ...props
}) => (
    <View {...props}
        style={{
            flex,
            flexDirection: flexDirection || "row",
            alignItems: alignItems || "center",
            justifyContent: justifyContent || "center",
            minWidth: minWidth || undefined,
            width: width || undefined,
            maxWidth: maxWidth || undefined,
            minHeight: minHeight || undefined,
            height: height || undefined,
            maxHeight: maxHeight || undefined,
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
            position,
            top,
            right,
            bottom,
            left,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//COLUMN------------------------------------------------------
export const Column: React.FC<ContainerProps> = ({
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    flexDirection,
    alignItems,
    justifyContent,
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
    position,
    top,
    right,
    bottom,
    left,
    ...props
}) => (
    <View {...props}
        style={{
            flex,
            flexDirection: flexDirection || "column",
            alignItems: alignItems || "center",
            justifyContent: justifyContent || "center",
            minWidth: minWidth || undefined,
            width: width || undefined,
            maxWidth: maxWidth || undefined,
            minHeight: minHeight || undefined,
            height: height || undefined,
            maxHeight: maxHeight || undefined,
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
            position,
            top,
            right,
            bottom,
            left,
        }}>{props.children}</View>
)
//------------------------------------------------------------


//HEADING-----------------------------------------------------
export interface CustomTextProps extends TextProps {
    title?: string;
    flex?: number;
    minWidth?: number | string;
    width?: number | string;
    maxWidth?: number | string;
    minHeight?: number | string;
    height?: number | string;
    maxHeight?: number | string;
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
    position?: "relative" | "absolute" | undefined;
    top?: number | string | undefined;
    right?: number | string | undefined;
    bottom?: number | string | undefined;
    left?: number | string | undefined;
}
export const Heading: React.FC<CustomTextProps> = ({
    title,
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
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
    position,
    top,
    right,
    bottom,
    left,
    ...props
}) => (
    <Text {...props}
        style={{
            flex,
            minWidth,
            width: width || undefined,
            maxWidth,
            minHeight,
            height: height || undefined,
            maxHeight,
            backgroundColor: backgroundColor || "transparent",
            color: color || Colors.primary,
            fontSize: fontSize || 22,
            fontWeight: fontWeight || "bold",
            textAlign: textAlign || "left",
            textAlignVertical: textAlignVertical || "center",
            fontFamily: 'Cabin Bold',
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
            position,
            top,
            right,
            bottom,
            left,
        }}>{title}</Text>
)
//------------------------------------------------------------


//PARAGRAPH---------------------------------------------------
export const Paragraph: React.FC<CustomTextProps> = ({
    title,
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
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
    position,
    top,
    right,
    bottom,
    left,
    ...props
}) => (
    <Text {...props}
        style={{
            flex,
            minWidth,
            width: width || undefined,
            maxWidth,
            minHeight,
            height: height || undefined,
            maxHeight,
            backgroundColor: backgroundColor || "transparent",
            color: color || Colors.primary,
            fontSize: fontSize || 14,
            fontWeight: fontWeight || "normal",
            textAlign: textAlign || "left",
            textAlignVertical: textAlignVertical || "center",
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
            position,
            top,
            right,
            bottom,
            left,
        }}>{title}</Text>
)
//------------------------------------------------------------


//BUTTON------------------------------------------------------
export interface ButtonProps extends TouchableOpacityProps, ContainerProps {
    title?: string;
    titleProps?: CustomTextProps;
    variation?: "primary" | "secondary" | "info" | "success" | "warning" | "danger" | "light" | "link";
    disabled?: boolean;
    rounded?: boolean;
    outline?: boolean;
    ghost?: boolean;
    activeOpacity?: number;
    leftElement?: any;
    leftElementProps?: ContainerProps;
    rightElement?: any;
    rightElementProps?: ContainerProps;
    color?: string | undefined;
}
export const Button: React.FC<ButtonProps> = ({
    flex,
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    variation,
    disabled,
    rounded,
    outline,
    ghost,
    activeOpacity,
    title,
    titleProps,
    leftElement,
    leftElementProps,
    rightElement,
    rightElementProps,
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
    color,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    ...props
}) => (
    <TouchableOpacity {...props}
        activeOpacity={disabled ? 1 : activeOpacity || 0.7}
        disabled={disabled}
        style={{
            flex,
            minWidth,
            width: width || undefined,
            maxWidth,
            minHeight,
            height: height || undefined,
            maxHeight,
            backgroundColor: backgroundColor ||
                disabled ? Colors.lightGray :
                ghost || outline ? "transparent" :
                    (variation === "primary" ? Colors.primary :
                        variation === "secondary" ? Colors.lightGray :
                            variation === "info" ? Colors.blue :
                                variation === "success" ? Colors.green :
                                    variation === "warning" ? Colors.orange :
                                        variation === "danger" ? Colors.red :
                                            variation === "light" ? Colors.white :
                                                variation === "link" ? "transparent" :
                                                    Colors.primary)
            ,
            borderColor:
                disabled ? "transparent" :
                    !ghost && outline ?
                        (variation === "primary" ? Colors.primary :
                            variation === "secondary" ? Colors.lightGray :
                                variation === "info" ? Colors.blue :
                                    variation === "success" ? Colors.green :
                                        variation === "warning" ? Colors.orange :
                                            variation === "danger" ? Colors.red :
                                                variation === "light" ? "transparent" :
                                                    variation === "link" ? "transparent" :
                                                        Colors.primary)
                        :
                        ghost ? "transparent" : borderColor,
            borderWidth: outline ? 1 || borderRadius : borderRadius,
            borderRadius: rounded ? 50 : borderRadius,
            borderRightWidth,
            borderLeftWidth,
            borderBottomWidth,
            borderTopWidth,
            borderTopColor,
            borderRightColor,
            borderLeftColor,
            borderBottomColor,
            padding,
            paddingVertical: paddingVertical || 12,
            paddingHorizontal: paddingHorizontal || 8,
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
            shadowColor,
            shadowOffset,
            shadowOpacity,
            shadowRadius,
            elevation,
        }}>

        <Row>
            {leftElement && <Row {...leftElementProps} position="absolute" left={10}>{leftElement}</Row>}

            <Paragraph {...titleProps}
                width={"100%"}
                textAlign="center"
                title={title}
                color={
                    disabled ? Colors.darkGray :
                        color || titleProps?.color || (
                            ghost || outline ? (variation === "primary" ? Colors.primary :
                                variation === "secondary" ? Colors.black :
                                    variation === "info" ? Colors.blue :
                                        variation === "success" ? Colors.green :
                                            variation === "warning" ? Colors.orange :
                                                variation === "danger" ? Colors.red :
                                                    variation === "light" ? Colors.black :
                                                        variation === "link" ? Colors.blue :
                                                            Colors.primary) :
                                (variation === "primary" ? Colors.white :
                                    variation === "secondary" ? Colors.black :
                                        variation === "info" ? Colors.white :
                                            variation === "success" ? Colors.white :
                                                variation === "warning" ? Colors.black :
                                                    variation === "danger" ? Colors.white :
                                                        variation === "light" ? Colors.black :
                                                            variation === "link" ? Colors.blue :
                                                                Colors.white))} />

            {rightElement && <Row {...rightElementProps} position="absolute" right={10}>{rightElement}</Row>}

        </Row>


    </TouchableOpacity>
)
//------------------------------------------------------------


//IMAGE-------------------------------------------------------
export interface CustomImageProps extends ImageProps {
    minWidth?: number | string | undefined;
    width?: number | string | undefined;
    maxWidth?: number | string | undefined;
    minHeight?: number | string | undefined;
    height?: number | string | undefined;
    maxHeight?: number | string | undefined;
    responsive?: boolean;
    backgroundColor?: string | undefined;
    padding?: number | undefined;
    paddingVertical?: number | undefined;
    paddingHorizontal?: number | undefined;
    paddingTop?: number | undefined;
    paddingRight?: number | undefined;
    paddingBottom?: number | undefined;
    paddingLeft?: number | undefined;
    margin?: number | undefined;
    marginVertical?: number | undefined;
    marginHorizontal?: number | undefined;
    marginTop?: number | undefined;
    marginRight?: number | undefined;
    marginBottom?: number | undefined;
    marginLeft?: number | undefined;
    position?: "relative" | "absolute";
    top?: number | string | undefined;
    right?: number | string | undefined;
    bottom?: number | string | undefined;
    left?: number | string | undefined;
    shadowColor?: string;
    shadowOffset?: {
        width: number,
        height: number
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
}
export const ImageCustom: React.FC<CustomImageProps> = ({
    minWidth,
    width,
    maxWidth,
    minHeight,
    height,
    maxHeight,
    responsive,
    backgroundColor,
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginVertical,
    marginHorizontal,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    position,
    top,
    right,
    bottom,
    left,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    ...props
}) => (
    <Image {...props}
        style={{
            minWidth,
            width: (responsive ? Number(width) * screenWidth : width) || 50,
            maxWidth,
            minHeight,
            height: (responsive ? Number(height) * screenHeight : height) || 50,
            maxHeight,
            backgroundColor,
            padding,
            paddingVertical,
            paddingHorizontal,
            paddingTop,
            paddingRight,
            paddingBottom,
            paddingLeft,
            margin,
            marginVertical,
            marginHorizontal,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            position,
            top,
            right,
            bottom,
            left,
            shadowColor,
            shadowOffset,
            shadowOpacity,
            shadowRadius
        }}
    />
)
//------------------------------------------------------------