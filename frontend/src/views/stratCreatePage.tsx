import {
	Box,
	Button,
	Center,
	FormControl,
	FormLabel,
	Heading,
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
import { ChangeEvent, useState } from "react";

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
	const [coverImage, setCoverImage] = useState<File>();
	const [video, setVideo] = useState<File>();
	const [name, setName] = useState<string>();
	const [description, setDescription] = useState<string>();
	const [map, setMap] = useState<string>();
	const [playersRequired, setPlayersRequired] = useState<number>(1);
	const [flashbangsRequired, setFlashbangsRequired] = useState<number>(0);
	const [smokesRequired, setSmokesRequired] = useState<number>(0);
	const [molotovsRequired, setMolotovsRequired] = useState<number>(0);
	const [grenadesRequired, setGrenadesRequired] = useState<number>(0);

	const handleCoverImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setCoverImage(e.target.files[0]);
		}
	};
	const handleVideoChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setVideo(e.target.files[0]);
		}
	};
	const handleSubmit = () => {
		if (!coverImage) {
			alert("Missing a cover image!");
			return;
		}
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
		console.log(coverImage, video, name, map, description);
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
					<FormLabel>Cover Image</FormLabel>
					<Stack direction="row" alignItems="center">
						<Button>
							Choose...
							<Input
								type="file"
								height="100%"
								width="100%"
								position="absolute"
								top="0"
								left="0"
								opacity="0"
								aria-hidden="true"
								accept="image/*"
								onChange={handleCoverImageChange}
							/>
						</Button>
						<Text>
							{coverImage
								? coverImage.name
								: "No cover image chosen"}
						</Text>
					</Stack>
				</FormControl>
				<FormControl isRequired>
					<FormLabel>Video</FormLabel>
					<Stack direction="row" alignItems="center">
						<Button>
							Choose...
							<Input
								type="file"
								height="100%"
								width="100%"
								position="absolute"
								top="0"
								left="0"
								opacity="0"
								aria-hidden="true"
								accept="video/*"
								onChange={handleVideoChange}
							/>
						</Button>
						<Text>{video ? video.name : "No video chosen"}</Text>
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
