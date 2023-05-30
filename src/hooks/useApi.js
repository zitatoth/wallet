import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = "https://wallet.webuni.workers.dev";
export const AXIOS_METHOD = {
	GET: "GET",
	POST: "POST",
	PUT: "PUT",
	DELETE: "DELETE",
	PATCH: "PATCH",
};

let authToken = false;

export function setApiToken(newToken) {
	authToken = newToken;
}

export function doApiCall(
	method,
	uri,
	onSuccess,
	onFailure = false,
	data = undefined
) {
	axios({
		method,
		url: `${BASE_URL}${uri}`,
		data,
		headers:
			authToken !== false ? { Authorization: `Bearer ${authToken} ` } : {},
	})
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((err) => {
			console.log();
			if (onFailure === false) {
				return;
			}
			onFailure(err?.response?.data.error, err);
		});
}

export function useApi(method, uri, postData = undefined, deps = []) {
	const [data, setData] = useState(false);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const apiCallCallback = useCallback(
		(apiPostData) => {
			setLoading(true);

			doApiCall(
				method,
				uri,
				(responseData) => {
					setData(responseData);
					setError(false);
					setLoading(false);
				},
				(errorMessage) => {
					setError(errorMessage);
					setData(false);
					setLoading(false);
				},
				postData
			);
		},
		[method, setData, setError, setLoading, uri]
	);

	useEffect(() => {
		apiCallCallback(postData);
	}, [apiCallCallback, uri, JSON.stringify(postData), ...deps]);

	return [data, loading, error, apiCallCallback];
}
