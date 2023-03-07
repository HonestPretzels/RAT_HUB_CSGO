import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { Strat, UploadStrat } from "../utils/types";
import useAxios from "../utils/useAxios";

export type StratContextStore = {
	getStratsList: () => Promise<Strat[]>;
	getStrat: (id: number) => Promise<Strat>;
	createStrat: (strat: UploadStrat) => void;
	modifyStrat: (id: number, strat: Strat) => Promise<void>;
};

export const StratContext = createContext<StratContextStore>(
	undefined as unknown as StratContextStore
);

const StratProvider = ({ children }: { children: any }) => {
	const axios = useAxios();

	const history = useHistory();

	const getStratsList = async () => {
		const response = await axios.get("/strats/list");
		if (response.status === 200) return response.data as Strat[];
		else {
			alert("Couldn't find the strats");
			return Promise.reject();
		}
	};

	const getStrat = async (id: number) => {
		const response = await axios.get(`/strats/${id}`);
		if (response.status === 200) return response.data as Strat;
		else {
			alert("Couldn't find the strats");
			return Promise.reject();
		}
	};

	const modifyStrat = async (id: number, strat: Strat) => {
		const response = await axios.put(`/strats/modify/${id}`, strat, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		if (response.status !== 200) {
			alert("Couldn't modify the strat");
			return Promise.reject();
		}
		return Promise.resolve();
	};

	const createStrat = async (strat: UploadStrat) => {
		const response = await axios.post("/strats/create/", strat, {
			headers: { "Content-Type": "multipart/form-data" },
		});
		if (response.status === 201)
			history.push(`/strats/${response.data.id}`);
		else {
			alert("Couldn't find the strats");
			return Promise.reject();
		}
	};

	const contextData: StratContextStore = {
		getStratsList,
		getStrat,
		createStrat,
		modifyStrat,
	};

	return (
		<StratContext.Provider value={contextData}>
			{children}
		</StratContext.Provider>
	);
};

export default StratProvider;
