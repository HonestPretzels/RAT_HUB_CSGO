import {
	Box,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { Strat } from "../utils/types";

export interface StratCardProps {
	strat: Strat;
}

function StratCard({ strat }: StratCardProps) {
	const { cover_image, failures, successes, id, name } = strat;

	const successRate =
		failures + successes === 0 ? 0 : successes / (failures + successes);
	const history = useHistory();

	return (
		<Center py={4}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("gray.200", "gray.700")}
				boxShadow={"2xl"}
				rounded={"lg"}
				_hover={{ cursor: "pointer" }}
				onClick={() => history.push(`/strats/${id}`)}
			>
				<Box rounded={"lg"} pos={"relative"} height={"230px"}>
					<Image
						rounded={"lg"}
						height={230}
						width={282}
						objectFit={"cover"}
						src={cover_image}
					/>
				</Box>
				<Stack pt={4} align={"center"}>
					<Heading
						fontSize={"2xl"}
						fontFamily={"body"}
						fontWeight={500}
					>
						{name}
					</Heading>
					<Stack direction="row">
						<Text>Success Rate: </Text>
						<Text
							color={successRate > 0.5 ? "green.400" : "red.400"}
						>
							{(successRate * 100).toFixed(2)}%
						</Text>
					</Stack>
				</Stack>
			</Box>
		</Center>
	);
}

export default StratCard;
