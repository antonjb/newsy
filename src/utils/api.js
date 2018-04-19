const KIND_ARTICLE = "article";
const KIND_VIDEO = "video";
const PUBLICATION_ENDPOINT = "https://content.thewest.com.au/publication";

export const getPublicationKind = (kind = KIND_ARTICLE) =>
  `${PUBLICATION_ENDPOINT}?kind=${kind}`;

export const getPublicationById = id => `${PUBLICATION_ENDPOINT}/${id}`;
