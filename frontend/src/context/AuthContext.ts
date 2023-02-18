import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

type AuthTokens = { access: string; refresh: string };

type AuthContextStore = {
	user: string;
	setUser: (user: string) => void;
	authTokens: AuthTokens;
	setAuthTokens: (tokens: AuthTokens) => void;
	registerUser: (
		username: string,
		password: string,
		password2: string
	) => void;
	loginUser: (username: string, password: string) => void;
	logoutUser: () => void;
};

const AuthContext = createContext<AuthContextStore>(
	undefined as unknown as AuthContextStore
);

export default AuthContext;

export const AuthProvider = ({ children }: { children: any }) => {
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens") as string)
			: null
	);
	const [user, setUser] = useState(() =>
		localStorage.getItem("authTokens")
			? jwt_decode(localStorage.getItem("authTokens") as string)
			: null
	);
	const [loading, setLoading] = useState(true);

	const history = useHistory();

	const loginUser = async (username: string, password: string) => {
		const response = await fetch("http://127.0.0.1:8000/api/token/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		const data = await response.json();

		if (response.status === 200) {
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			localStorage.setItem("authTokens", JSON.stringify(data));
			history.push("/");
		} else {
			alert("Something went wrong!");
		}
	};

	const registerUser = async (
		username: string,
		password: string,
		password2: string
	) => {
		const response = await fetch("http://127.0.0.1:8000/api/register/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
				password2,
			}),
		});
		if (response.status === 201) {
			history.push("/login");
		} else {
			alert("Something went wrong!");
		}
	};

	const logoutUser = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("authTokens");
		history.push("/");
	};

	const contextData = {
		user,
		setUser,
		authTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser,
	};

	useEffect(() => {
		if (authTokens) {
			setUser(jwt_decode(authTokens.access));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return (
		<AuthContext.Provider value={contextData}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
