import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

export default function RegisterPage() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const { registerUser } = useContext(AuthContext);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (password === password2) registerUser(username, password, password2);
		else alert("passwords must match");
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
					<Heading fontSize={"4xl"} textAlign={"center"}>
						Become a Rat
					</Heading>
				</Stack>
				<Box
					rounded={"lg"}
					bg={useColorModeValue("white", "gray.700")}
					boxShadow={"lg"}
					p={8}
				>
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
						<FormControl id="password2" isRequired>
							<FormLabel>Confirm password</FormLabel>
							<Input
								type="password"
								onChange={(e) =>
									setPassword2(e.currentTarget.value)
								}
							/>
						</FormControl>
						<Button
							type="submit"
							loadingText="Submitting"
							size="lg"
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}
							onClick={handleSubmit}
						>
							Sign up
						</Button>
						<Text align={"center"}>
							Already a user?{" "}
							<Link
								color={"blue.400"}
								as={ReactRouterLink}
								to="/login"
							>
								Login
							</Link>
						</Text>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
}
