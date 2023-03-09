export type User = {
	token_type: string;
	exp: number;
	iat: number;
	jti: string;
	user_id: number;
	username: string;
	email: string;
};

export type Strat = {
	cover_image: string | null;
	video: string | null;
	name: string;
	successes: number;
	failures: number;
	attempts: number;
	abandons: number;
	id: number;
	created_by: { username: string };
	map: string;
	flashbangs_required: number;
	smokes_required: number;
	grenades_required: number;
	molotovs_required: number;
	players_required: number;
	description: string;
};

export type UploadStrat = {
	video: string;
	name: string;
	map: string;
	flashbangs_required: number;
	smokes_required: number;
	grenades_required: number;
	molotovs_required: number;
	players_required: number;
	description: string;
};
