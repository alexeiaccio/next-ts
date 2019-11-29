import * as React from 'react';
import { NextPage } from 'next';
// import { useQuery } from '@apollo/react-hooks'
// import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { get } from 'lodash';
// import { RichText } from 'prismic-reactjs';

import { withApollo } from '../lib/apollo';
import Header from '../components/header';

export const PAGE_QUERY = gql`
 query pageQuery($uid: String!, $lang: String!) {
  page(uid: $uid, lang: $lang) {
    title
    body {
      ...on PageBodyWorks {
        fields {
          work {
            __typename
            ...on Work {
              title
              theme
            }
          }
        }
      }
    }
  }
}
`;

const Index: NextPage<{ title?: string, body: any[] }> = ({ title = '', body = [] }) => {
  // const { data } = useQuery(ABOUT_QUERY)

  // const title = get(data, 'allAbouts.edges.0.node.title.0.text', '') as string;

  return <div>
    <Header />
    <h1>{title}</h1>
    {body.map(({ fields }, idx) => {
      return <React.Fragment key={idx}>
        {
          fields.map(({ work, __typename }: { work: object, __typename: string }) => {
            if (__typename === 'PageBodyWorksFields') {
              return <div key={get(work, 'theme')}>
                {get(work, 'title.0.text')}
              </div>
            }
          })
        }
      </React.Fragment>
    })}
  </div>;
};

Index.getInitialProps = async ({ apolloClient }: any) => {
  const { data } = await apolloClient.query({
    query: PAGE_QUERY,
    variables: { uid: 'index', lang: 'ru' }
  })

  const title = get(data, 'page.title.0.text', '') as string;
  const body = get(data, 'page.body', []) as any[];

  return { title, body };
};

export default withApollo(Index);