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
	cover_image: string;
	video: string;
	name: string;
	successes: number;
	failures: number;
	id: number;
	created_by: { username: string };
	map: string;
	flashbangs_required: number;
	smokes_required: number;
	grenades_required: number;
	molotovs_required: number;
};
