import {
	Box,
	ChakraProvider,
	ColorModeScript,
	useColorModeValue,
} from "@chakra-ui/react";

import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import theme from "./theme/theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Router>
				<Box bg={useColorModeValue("gray.100", "gray.900")}>
					<AuthProvider>
						<Navbar />
						<Switch>
							<PrivateRoute
								component={ProtectedPage}
								path="/protected"
								exact
							/>
							<Route component={Login} path="/login" />
							<Route component={Register} path="/register" />
							<Route component={Home} path="/" />
						</Switch>
					</AuthProvider>
					<Footer />
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
