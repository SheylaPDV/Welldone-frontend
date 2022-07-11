import client, { setAuthorizationHeader } from "../../api/client";

export const login = ({ ...credentials }) => {
  return client.post("/v1/auth", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    return accessToken;
  });
};
