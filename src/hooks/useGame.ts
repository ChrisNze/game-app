import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { Genre } from "./useGenre";
import { AxiosRequestConfig } from "axios";
import { PlatForm } from "./usePlatForm";

export interface Game {
	id: number;
	name: string;
	metacritic: number;
	added: number;
	genres: [
		{
			id: number;
			name: string;
			image_background: string;
		}
	];
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

const useGame = (selectedGenre: Genre | null, selectedPlatForm: PlatForm | null, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
	const [loading, setLoading] = useState(false);
	const [game, setGame] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(
		() => {
			setLoading(!loading);

			const controller = new AbortController();
			apiClient
				.get<FetchGamesResponse>("/games", { signal: controller.signal, ...requestConfig })
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
		},
		deps ? [...deps] : []
	);

	return { game, error, loading };
};

export default useGame;
