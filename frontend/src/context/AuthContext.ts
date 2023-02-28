import { createContext } from "react";
import { User } from "../utils/types";

type AuthTokens = { access: string; refresh: string };

export type AuthContextStore = {
	user: User | null;
	setUser: (user: User) => void;
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
