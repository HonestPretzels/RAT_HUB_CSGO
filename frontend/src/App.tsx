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
import StratList from "./views/stratListPage";
import StratView from "./views/stratViewPage";
import theme from "./theme/theme";
import StratCreate from "./views/stratCreatePage";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<Router>
				<Box minH="100vh">
					<AuthProvider>
						<Navbar />
						<Box minH="86.6vh">
							<Switch>
								<PrivateRoute
									component={StratList}
									path="/strats"
									exact
								/>
								<PrivateRoute
									component={StratView}
									path="/strats/:id"
									exact
								/>
								<PrivateRoute
									component={StratCreate}
									path="/strats/create"
									exact
								/>
								<PrivateRoute component={Home} path="/" exact />
								<Route component={Login} path="/login" />
								<Route component={Register} path="/register" />
							</Switch>
						</Box>
						<Footer />
					</AuthProvider>
				</Box>
			</Router>
		</ChakraProvider>
	);
}

export default App;
