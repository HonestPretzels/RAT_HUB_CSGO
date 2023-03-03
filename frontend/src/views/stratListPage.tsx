import { Grid, GridItem } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import StratCard from "../components/StratCard";
import { StratContext } from "../context/StratContext";

const StratListPage = () => {
	const { strats, getStratsList } = useContext(StratContext);

	useEffect(() => {
		getStratsList();
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
					<StratCard
						imageLink={strat.cover_image}
						label={strat.name}
						successes={strat.successes}
						failures={strat.failures}
						id={strat.id}
					/>
				</GridItem>
			))}
		</Grid>
	);
};

export default StratListPage;
