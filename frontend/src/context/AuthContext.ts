import { createContext } from "react";

type AuthTokens = { access: string; refresh: string };

export type AuthContextStore = {
	user: string | null;
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
