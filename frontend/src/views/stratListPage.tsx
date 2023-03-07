import {
	Box,
	useColorModeValue,
	Grid,
	GridItem,
	IconButton,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import StratCard from "../components/StratCard";
import { StratContext } from "../context/StratContext";
import { Strat } from "../utils/types";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const StratListPage = () => {
	const [strats, setStrats] = useState<Strat[]>([]);
	const { getStratsList } = useContext(StratContext);
	const history = useHistory();

	useEffect(() => {
		getStratsList().then((s) => setStrats(s));
	}, [getStratsList]);

	return (
		<Box>
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
			<Box position="fixed" bottom={12} right={12} zIndex={10}>
				<IconButton
					aria-label="Create New Strat"
					size="lg"
					bgColor={useColorModeValue("purple.400", "purple.700")}
					_hover={{
						bgColor: useColorModeValue("purple.500", "purple.800"),
					}}
					boxShadow="2px 3px 3px 2px rgb(0,0,0,0.25)"
					onClick={() => history.push("strats/create")}
				>
					<FaPlus />
				</IconButton>
			</Box>
		</Box>
	);
};

export default StratListPage;
