import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Strat } from "../utils/types";
import useAxios from "../utils/useAxios";

export type StratContextStore = {
	strats: Strat[];
	getStratsList: () => void;
	getStrat: (id: number) => Promise<Strat>;
	createStrat: (strat: Strat) => void;
};

export const StratContext = createContext<StratContextStore>(
	undefined as unknown as StratContextStore
);

const StratProvider = ({ children }: { children: any }) => {
	const [strats, setStrats] = useState<Strat[]>([]);

	const axios = useAxios();

	const history = useHistory();

	const getStratsList = async () => {
		const response = await axios.get("/strats/list");
		if (response.status === 200) setStrats(response.data);
		else alert("Couldn't find the strats");
	};
	const getStrat = async (id: number) => {
		const response = await axios.get(`/strats/${id}`);
		if (response.status === 200) return response.data as Strat;
		else {
			alert("Couldn't find the strats");
			return Promise.reject();
		}
	};
	const createStrat = async (strat: Strat) => {
		const response = await axios.post("/strats/create", strat);
		if (response.status === 200) history.push(`strats/${response.data.id}`);
		else {
			alert("Couldn't find the strats");
			return Promise.reject();
		}
	};

	const contextData: StratContextStore = {
		strats,
		getStratsList,
		getStrat,
		createStrat,
	};

	return (
		<StratContext.Provider value={contextData}>
			{children}
		</StratContext.Provider>
	);
};

export default StratProvider;
