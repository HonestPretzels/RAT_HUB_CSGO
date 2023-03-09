import {
	Button,
	Center,
	FormControl,
	FormLabel,
	Input,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	Select,
	Stack,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useContext, useState } from "react";
import { StratContext } from "../context/StratContext";
import { UploadStrat } from "../utils/types";

const MAPS = [
	"de_mirage",
	"de_inferno",
	"de_ancient",
	"de_anubis",
	"de_vertigo",
	"de_nuke",
	"de_overpass",
];

const StratCreatePage = () => {
	const [video, setVideo] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [map, setMap] = useState<string>("");
	const [playersRequired, setPlayersRequired] = useState<number>(1);
	const [flashbangsRequired, setFlashbangsRequired] = useState<number>(0);
	const [smokesRequired, setSmokesRequired] = useState<number>(0);
	const [molotovsRequired, setMolotovsRequired] = useState<number>(0);
	const [grenadesRequired, setGrenadesRequired] = useState<number>(0);

	const { createStrat } = useContext(StratContext);

	const handleSubmit = () => {
		if (!video) {
			alert("Missing a video!");
			return;
		}
		if (!name) {
			alert("Missing a name!");
			return;
		}
		if (!map) {
			alert("Missing a map!");
			return;
		}
		const newStrat: UploadStrat = {
			video: video,
			name,
			map,
			description,
			smokes_required: smokesRequired,
			players_required: playersRequired,
			molotovs_required: molotovsRequired,
			grenades_required: grenadesRequired,
			flashbangs_required: flashbangsRequired,
		};
		createStrat(newStrat);
	};

	return (
		<Center className="box" my={4}>
			<Stack minW="50vw">
				<FormControl isRequired>
					<FormLabel>Name</FormLabel>
					<Input onChange={(e) => setName(e.target.value)} />
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Map</FormLabel>
					<Select
						onChange={(e) => setMap(e.target.value)}
						placeholder="Select a map"
						value={map}
					>
						{MAPS.map((m) => (
							<option value={m}>{m}</option>
						))}
					</Select>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Youtube Video</FormLabel>
					<Stack direction="row" alignItems="center">
						<Input onChange={(e) => setVideo(e.target.value)} />
					</Stack>
				</FormControl>
				<FormControl>
					<FormLabel>Description</FormLabel>
					<Textarea
						onChange={(e) => setDescription(e.target.value)}
					/>
				</FormControl>
				<FormControl>
					<FormLabel>Players Required</FormLabel>
					<NumberInput
						onChange={(_, value) => setPlayersRequired(value)}
						max={5}
						min={0}
						value={playersRequired}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Smokes Required</FormLabel>
					<NumberInput
						onChange={(_, value) => setSmokesRequired(value)}
						max={5}
						min={0}
						value={smokesRequired}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Molotovs Required</FormLabel>
					<NumberInput
						onChange={(_, value) => setMolotovsRequired(value)}
						max={5}
						min={0}
						value={molotovsRequired}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Flashbangs Required</FormLabel>
					<NumberInput
						onChange={(_, value) => setFlashbangsRequired(value)}
						max={10}
						min={0}
						value={flashbangsRequired}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<FormControl>
					<FormLabel>Grenades Required</FormLabel>
					<NumberInput
						onChange={(_, value) => setGrenadesRequired(value)}
						max={5}
						min={0}
						value={grenadesRequired}
					>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</FormControl>
				<Button onClick={handleSubmit}>Submit</Button>
			</Stack>
		</Center>
	);
};

export default StratCreatePage;
