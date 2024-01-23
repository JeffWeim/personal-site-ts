// import { GraphQLClient } from 'graphql-request';

type TRequestParameters = {
  query: string;
  variables?: any;
  preview?: boolean;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string;
  revalidate?: boolean;
};

// export function request({
//   query,
//   variables,
//   preview = false,
// }: TRequestParameters) {
//   const endpoint = preview
//     ? `https://graphql.datocms.com/preview`
//     : `https://graphql.datocms.com/`;

//   const client = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
//     },
//   });

//   return client.request(query, variables);
// }

import { cache } from 'react';

const dedupedFetch = cache(async (serializedInit: any) => {
  const response = await fetch(
    'https://graphql.datocms.com/',
    JSON.parse(serializedInit),
  );
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`,
    );
  }
  return responseBody;
});

export async function request({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: TRequestParameters) {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { 'X-Include-Drafts': 'true' } : {}),
        ...(excludeInvalid ? { 'X-Exclude-Invalid': 'true' } : {}),
        ...(visualEditingBaseUrl
          ? {
              'X-Visual-Editing': 'vercel-v1',
              'X-Base-Editing-Url': visualEditingBaseUrl,
            }
          : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { 'X-Environment': process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {}),
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate },
    }),
  );
  return data;
}
