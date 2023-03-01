import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import AuthProvider from "./context/AuthProvider";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import theme from "./theme/theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Router>
				<Box minH="100vh">
					<AuthProvider>
						<Navbar />
						<Switch>
							{/* TODO: Make an actual login required page */}
							<PrivateRoute
								component={Home}
								path="/protected"
								exact
							/>
							<Route component={Login} path="/login" />
							<Route component={Register} path="/register" />
							<Route component={Home} path="/" />
						</Switch>
						<Footer />
					</AuthProvider>
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
