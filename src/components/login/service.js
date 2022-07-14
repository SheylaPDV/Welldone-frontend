import client, { setAuthorizationHeader } from "../../api/client";
import { withFormData } from "../../utils/withFormData";

export const login = ({ ...credentials }) => {
  return client.post("/v1/auth", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    return accessToken;
  });
};

export const createUser = withFormData((newUser) => {
  return client.post("/v1/user", newUser);
});
