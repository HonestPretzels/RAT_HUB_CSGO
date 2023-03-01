import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa";
import { SiPug } from "react-icons/si";

const SocialButton = ({
	children,
	label,
	href,
}: {
	children: ReactNode;
	label: string;
	href: string;
}) => {
	return (
		<chakra.button
			bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
			rounded={"full"}
			w={8}
			h={8}
			cursor={"pointer"}
			as={"a"}
			href={href}
			target="_blank"
			display={"inline-flex"}
			alignItems={"center"}
			justifyContent={"center"}
			transition={"background 0.3s ease"}
			_hover={{
				bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export default function Footer() {
	return (
		<Box
			bg={useColorModeValue("gray.200", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			position="absolute"
			bottom="0"
			minWidth="100%"
		>
			<Container
				as={Stack}
				maxW={"100%"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}
			>
				<Stack direction={"row"} spacing={6}>
					<SocialButton
						label={"Github"}
						href={"https://github.com/HonestPretzels/RAT_HUB_CSGO"}
					>
						<FaGithub />
					</SocialButton>
					<SocialButton
						label={"Puggies"}
						href={"https://puggies.jayden.codes/app"}
					>
						<SiPug />
					</SocialButton>
				</Stack>
				<Text>made with &#128153; in Canada</Text>
			</Container>
		</Box>
	);
}
