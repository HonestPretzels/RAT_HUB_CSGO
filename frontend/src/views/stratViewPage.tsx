import {
	AspectRatio,
	Box,
	CircularProgress,
	Divider,
	Flex,
	Grid,
	GridItem,
	Heading,
	SimpleGrid,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { StratContext } from "../context/StratContext";
import { Strat } from "../utils/types";
import {
	GiFlashGrenade,
	GiStunGrenade,
	GiGrenade,
	GiMolotov,
} from "react-icons/gi";

interface StratViewProps {
	id: string;
}

const StratView = ({ id }: StratViewProps) => {
	const { getStrat } = useContext(StratContext);
	const [strat, setStrat] = useState<Strat | undefined>(undefined);

	useEffect(() => {
		getStrat(parseInt(id, 10)).then((s) => setStrat(s));
	}, [getStrat, id]);

	return (
		<Box>
			{!strat ? (
				<CircularProgress isIndeterminate />
			) : (
				<SimpleGrid gap={4} columns={7} px={4}>
					<GridItem colSpan={2}>
						<Stack direction="column">
							<Heading size="xl" textAlign={"center"}>
								{strat.name} - {strat.map}
							</Heading>
							<Divider />
							<Text size="md" textAlign={"center"}>
								Created by: {strat.created_by.username}
							</Text>
							<Stack
								direction="row"
								justify="center"
								align="center"
								paddingTop={8}
							>
								<GiFlashGrenade size="10%" />{" "}
								<Heading size="md" textAlign={"right"}>
									{strat.flashbangs_required} Flashes Required
								</Heading>
							</Stack>
							<Stack
								direction="row"
								justify="center"
								align="center"
							>
								<GiStunGrenade size="10%" />{" "}
								<Heading size="md" textAlign={"right"}>
									{strat.smokes_required} Smokes Required
								</Heading>
							</Stack>
							<Stack
								direction="row"
								justify="center"
								align="center"
							>
								<GiMolotov size="10%" />{" "}
								<Heading size="md" textAlign={"right"}>
									{strat.molotovs_required} Molotovs Required
								</Heading>
							</Stack>
							<Stack
								direction="row"
								justify="center"
								align="center"
							>
								<GiGrenade size="10%" />{" "}
								<Heading size="md" textAlign={"right"}>
									{strat.grenades_required} Grenade Required
								</Heading>
							</Stack>
						</Stack>
					</GridItem>
					<GridItem colSpan={3}>
						<Flex justify="center">
							<AspectRatio width="42vw" ratio={16 / 9}>
								<iframe
									src={strat.video}
									title={strat.name}
									allowFullScreen
								/>
							</AspectRatio>
						</Flex>
					</GridItem>
					<GridItem colSpan={2} px={4}>
						<Heading size="sm" textAlign={"center"}>
							{JSON.stringify(strat)}
						</Heading>
					</GridItem>
					<GridItem colSpan={7}>
						<Heading size="sm" textAlign={"center"}>
							{JSON.stringify(strat)}
						</Heading>
					</GridItem>
				</SimpleGrid>
			)}
		</Box>
	);
};

const StratViewRenderer = ({ match }: RouteComponentProps<StratViewProps>) => (
	<StratView id={match.params.id} />
);

export default StratViewRenderer;
