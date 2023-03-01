import { Box, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { RouteComponentProps } from "react-router-dom";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";

interface StratViewProps {
	id: string;
}

const StratView = ({ id }: StratViewProps) => {
	const { user } = useContext(AuthContext);
	return (
		<Box className="box">
			{user && <UserInfo user={user} />}
			<Heading size="sm">You are on The Strat {id} View Page!</Heading>
		</Box>
	);
};

const StratViewRenderer = ({ match }: RouteComponentProps<StratViewProps>) => (
	<StratView id={match.params.id} />
);

export default StratViewRenderer;
