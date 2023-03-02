import { Grid, GridItem } from "@chakra-ui/react";
import StratCard from "../components/StratCard";

const StratListPage = () => {
	// TODO: Fetch the strats from the backend
	const strats = [
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 1,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 3,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 20,
			failures: 10,
			id: 2,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 30,
			failures: 30,
			id: 4,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 10,
			failures: 50,
			id: 5,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 6,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 1,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 3,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 20,
			failures: 10,
			id: 2,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 30,
			failures: 30,
			id: 4,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 10,
			failures: 50,
			id: 5,
		},
		{
			image: "http://localhost:8000/media/overpass.jpg",
			name: "overpass strat",
			successes: 50,
			failures: 10,
			id: 6,
		},
	];

	return (
		<Grid
			className="box"
			templateColumns="repeat(5, 1fr)"
			gap={2}
			minH="100%"
		>
			{strats.map((strat) => (
				<GridItem>
					<StratCard
						imageLink={strat.image}
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
