import { Box, Heading } from "@chakra-ui/react";
import { User } from "../utils/types";

function UserInfo({ user }: { user: User }) {
	return (
		<Box>
			<Heading size="md">Hello, {user.username}</Heading>
		</Box>
	);
}

export default UserInfo;
