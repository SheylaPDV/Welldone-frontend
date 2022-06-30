import client from "../api/client";
// import { withFormData } from "../utils/withFormData";

const userBaseUrl = "/api/v1/user";

export const getLatestBlogs = () => {
  const url = `${userBaseUrl}`;
  return client.get(url);
};

// export const getTags = () => {
//   return client.get(`${advertsBaseUrl}/tags`);
// };

// export const getAdvert = (advertId) => {
//   const url = `${advertsBaseUrl}/${advertId}`;
//   return client.get(url);
// };
// export const createAdvert = withFormData((newAdvert) => {
//   return client.post(advertsBaseUrl, newAdvert);
// });

// export const deleteAdvert = (advertId) => {
//   const url = `${advertsBaseUrl}/${advertId}`;
//   return client.delete(url);
// };
