// 1. import `extendTheme` function
import {
	extendTheme,
	StyleFunctionProps,
	useColorModeValue,
	type ThemeConfig,
} from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
	config,
});

export default theme;
