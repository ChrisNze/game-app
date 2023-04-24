import axios, { CanceledError } from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "4a926ed3d6f247329b368e63527303ce",
	},
});

export { CanceledError };
