import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function LoginPage() {
	const { loginUser } = useContext(AuthContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		username.length > 0 &&
			password.length > 0 &&
			loginUser(username, password);
	};

	return (
		<Flex
			minH={"100%"}
			align={"center"}
			justify={"center"}
			bg={useColorModeValue("gray.50", "gray.800")}
		>
			<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
				<Stack align={"center"}>
					<Heading fontSize={"4xl"}>Enter the hub</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
					<form>
						<Stack spacing={4}>
							<FormControl id="username" isRequired>
								<FormLabel>Username</FormLabel>
								<Input
									onChange={(e) =>
										setUsername(e.currentTarget.value)
									}
								/>
							</FormControl>
							<FormControl id="password" isRequired>
								<FormLabel>Password</FormLabel>
								<Input
									type="password"
									onChange={(e) =>
										setPassword(e.currentTarget.value)
									}
								/>
							</FormControl>
							<Stack spacing={2}>
								<Button
									type="submit"
									bg={"blue.400"}
									color={"white"}
									_hover={{
										bg: "blue.500",
									}}
									onClick={handleSubmit}
								>
									Sign in
								</Button>
								<Stack
									direction={{ base: "column", sm: "row" }}
									align={"start"}
									justify={"center"}
								>
									<Link
										color={"blue.400"}
										as={ReactRouterLink}
										to="/register"
									>
										Register
									</Link>
								</Stack>
							</Stack>
						</Stack>
					</form>
				</Box>
			</Stack>
		</Flex>
	);
}
