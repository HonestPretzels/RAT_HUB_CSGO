import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

const StratListPage = () => {
	const { user } = useContext(AuthContext);
	return (
		<Box className="box">
			{user && <UserInfo user={user} />}
			<Heading size="sm">You are on the Strat List Page</Heading>
		</Box>
	);
};

export default StratListPage;
