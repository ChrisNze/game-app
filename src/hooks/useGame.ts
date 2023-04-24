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
	const [loading, setLoading] = useState(false);
	const [game, setGame] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(!loading);

		const controller = new AbortController();
		apiClient
			.get<FetchGamesResponse>("/games", { signal: controller.signal })
			.then((res) => {
				setTimeout(() => {
					setGame(res.data.results);
				}, 500);

				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => controller.abort();
	}, []);

	return { game, error, loading };
};

export default useGame;
