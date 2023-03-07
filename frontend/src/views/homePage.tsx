import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Home = () => {
	return (
		<Flex minH={"100%"} align={"center"} justify={"center"}>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Heading size="sm">We only got one thing for you</Heading>
				<Button as={ReactRouterLink} to="/strats">
					Strats
				</Button>
			</Stack>
		</Flex>
	);
};

export default Home;
