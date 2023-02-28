import { User } from "../utils/types";

function UserInfo({ user }: { user: User }) {
	return (
		<div>
			<h1>Hello, {user.username}</h1>
		</div>
	);
}

export default UserInfo;
