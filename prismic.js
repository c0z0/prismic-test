import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://cserdean.cdn.prismic.io/api/v2';
export const accessToken =
  'MC5YcE9HQ1JBQUFDRUFQOUtU.H--_ve-_vSPvv71v77-9Ch3vv73vv73vv70vYe-_vXR_77-9H--_ve-_ve-_ve-_ve-_vURd77-977-9DTPvv73vv70';

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
