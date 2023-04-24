import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
	id: number;
	name: string;
	metacritic: number;
	background_image: string;
	parent_platforms: {
		platform: {
			id: number;
			name: string;
			slug: string;
		};
	}[];
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const useGame = () => {
	const [game, setGame] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => setGame(res.data.results))
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	}, []);

	return { game, error };
};

export default useGame;
