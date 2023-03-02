import { Box, Heading } from "@chakra-ui/react";
import { RouteComponentProps } from "react-router-dom";

interface StratViewProps {
	id: string;
}

const StratView = ({ id }: StratViewProps) => {
	return (
		<Box className="box">
			<Heading size="sm">You are on The Strat {id} View Page!</Heading>
		</Box>
	);
};

const StratViewRenderer = ({ match }: RouteComponentProps<StratViewProps>) => (
	<StratView id={match.params.id} />
);

export default StratViewRenderer;
