import { useState, useEffect } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface PlatForm {
	id: number;
	name: string;
	image_background: string;
}

interface FetchPlatFormResponse {
	count: number;
	results: PlatForm[];
}

const usePlatForm = () => {
	const [loading, setLoading] = useState(false);
	const [platForm, setGame] = useState<PlatForm[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		setLoading(!loading);

		const controller = new AbortController();
		apiClient
			.get<FetchPlatFormResponse>("/platforms/lists/parents", { signal: controller.signal })
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

	return { platForm, error, loading };
};

export default usePlatForm;
