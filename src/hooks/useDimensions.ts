import { Dimensions } from "react-native";

export const dimensions = Dimensions;

export const window = dimensions.get("window");
export const windowWidth = window.width;
export const windowHeight = window.height;

export const screen = dimensions.get("screen");
export const screenWidth = screen.width;
export const screenHeight = screen.height;

export const fontscale = screen.fontScale;