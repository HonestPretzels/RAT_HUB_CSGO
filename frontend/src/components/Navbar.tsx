import { Link as ReactRouterLink } from "react-router-dom";
import { ReactNode, useContext, useEffect, useState } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
	HStack,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AuthContext from "../context/AuthContext";

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		as={ReactRouterLink}
		to={to}
	>
		{children}
	</Link>
);

export default function NavBar() {
	const { user, logoutUser } = useContext(AuthContext);

	const { colorMode, toggleColorMode } = useColorMode();
	const [Links, setLinks] = useState([
		{ label: "Login", to: "/login" },
		{ label: "Register", to: "/register" },
	]);

	useEffect(() => {
		setLinks(
			user
				? [
						{ label: "Home", to: "/" },
						{ label: "Some Page", to: "/protected" },
				  ]
				: [
						{ label: "Login", to: "/login" },
						{ label: "Register", to: "/register" },
				  ]
		);
	}, [user]);

	return (
		<>
			<Box bg={useColorModeValue("gray.200", "gray.900")} px={4}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<HStack spacing={8} alignItems={"center"}>
						<Box>RAT HUB</Box>
						<HStack
							as={"nav"}
							spacing={4}
							display={{ base: "none", md: "flex" }}
						>
							{Links.map((link) => (
								<NavLink key={link.label} to={link.to}>
									{link.label}
								</NavLink>
							))}
						</HStack>
					</HStack>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button>

							{user && (
								<Menu>
									<MenuButton
										as={Button}
										rounded={"full"}
										variant={"link"}
										cursor={"pointer"}
										minW={0}
									>
										<Avatar
											size={"sm"}
											src={
												"https://avatars.dicebear.com/api/male/username.svg"
											}
										/>
									</MenuButton>
									<MenuList alignItems={"center"}>
										<br />
										<Center>
											<Avatar
												size={"2xl"}
												src={
													"https://avatars.dicebear.com/api/male/username.svg"
												}
											/>
										</Center>
										<br />
										<Center>
											<p>Username</p>
										</Center>
										<br />
										<MenuDivider />
										<MenuItem onClick={logoutUser}>
											Logout
										</MenuItem>
									</MenuList>
								</Menu>
							)}
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
