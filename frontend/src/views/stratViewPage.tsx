import {
	AspectRatio,
	Box,
	Button,
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
				<SimpleGrid gap={4} columns={12} px={4} pt={4}>
					<GridItem colSpan={3}>
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
					<GridItem colSpan={6}>
						<Flex justify="center">
							{strat.video ? (
								<AspectRatio width="50vw" ratio={16 / 9}>
									<iframe
										src={strat.video}
										title={strat.name}
										allowFullScreen
									/>
								</AspectRatio>
							) : (
								<Heading size="xl" textAlign={"center"}>
									No Video Available
								</Heading>
							)}
						</Flex>
					</GridItem>
					<GridItem colSpan={3} px={4}>
						<Stack direction="column">
							<Heading size="lg" textAlign={"center"}>
								Description
							</Heading>
							<Divider />
							<Text size="md" textAlign={"center"}>
								{strat.description}
							</Text>
						</Stack>
					</GridItem>
					<GridItem colSpan={4}>
						<Button
							minH="20vh"
							minW="100%"
							bgColor={"green.500"}
							_hover={{ bgColor: "green.300" }}
						>
							<Heading textColor={"green.900"}>Success</Heading>
						</Button>
					</GridItem>
					<GridItem colSpan={4}>
						<Button
							minH="20vh"
							minW="100%"
							bgColor={"yellow.500"}
							_hover={{ bgColor: "yellow.200" }}
						>
							<Heading textColor={"yellow.900"}>Abandon</Heading>
						</Button>
					</GridItem>
					<GridItem colSpan={4}>
						<Button
							minH="20vh"
							minW="100%"
							bgColor={"red.500"}
							_hover={{ bgColor: "red.300" }}
						>
							<Heading textColor={"red.900"}>Failure</Heading>
						</Button>
					</GridItem>
					<GridItem colSpan={4}>
						<Heading textAlign="center" size="md">
							Total Successes: {strat.successes}
						</Heading>
					</GridItem>
					<GridItem colSpan={4}>
						<Heading textAlign="center" size="md">
							Total Abandons: {strat.abandons}
						</Heading>
					</GridItem>
					<GridItem colSpan={4}>
						<Heading textAlign="center" size="md">
							Total Failures: {strat.failures}
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
