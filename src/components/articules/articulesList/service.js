import client from "../../../api/client";

const articuleBaseUrl = "/v1/articules"

export const getLastedArticules = async () => {
    const url = articuleBaseUrl;
    return client.get(url);
}