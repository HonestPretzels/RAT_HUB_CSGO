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
};
