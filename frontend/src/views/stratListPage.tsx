import { Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import StratCard from "../components/StratCard";
import { StratContext } from "../context/StratContext";
import { Strat } from "../utils/types";

const StratListPage = () => {
	const [strats, setStrats] = useState<Strat[]>([]);
	const { getStratsList } = useContext(StratContext);

	useEffect(() => {
		getStratsList().then((s) => setStrats(s));
	}, [getStratsList]);

	return (
		<Grid
			className="box"
			templateColumns="repeat(5, 1fr)"
			gap={2}
			minH="100%"
		>
			{strats.map((strat) => (
				<GridItem key={strat.id}>
					<StratCard strat={strat} />
				</GridItem>
			))}
		</Grid>
	);
};

export default StratListPage;
