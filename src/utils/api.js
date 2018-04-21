export const KIND_ARTICLE = "article";
export const KIND_VIDEO = "video";
const PUBLICATION_ENDPOINT = "https://content.thewest.com.au/publication";

export const getPublicationKind = (kind = KIND_ARTICLE) =>
  `${PUBLICATION_ENDPOINT}?kind=${kind}`;

export const getPublicationById = id => `${PUBLICATION_ENDPOINT}/${id}`;

export async function asyncFetch(endpoint) {
  const response = await fetch(endpoint);
  return await response.json();
}
