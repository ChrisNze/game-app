import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

interface FetchGenreResponse {
	count: number;
	results: Genre[];
}

const useGenre = () => {
	const [loading, setLoading] = useState(false);
	const [genre, setGame] = useState<Genre[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(!loading);

		const controller = new AbortController();
		apiClient
			.get<FetchGenreResponse>("/genres", { signal: controller.signal })
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

	return { genre, error, loading };
};

export default useGenre;
