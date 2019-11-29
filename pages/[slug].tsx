import { NextPage } from 'next';
// import { useQuery } from '@apollo/react-hooks'
// import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { get } from 'lodash';
import { RichText } from 'prismic-reactjs';

import { withApollo } from '../lib/apollo';
import Header from '../components/header';

export const PAGE_QUERY = gql`
 query pageQuery($uid: String!, $lang: String!) {
  page(uid: $uid, lang: $lang) {
    title
  }
}
`;

const Page: NextPage<{ title?: object }> = ({ title }) => {
  // const { data } = useQuery(ABOUT_QUERY)

  // const title = get(data, 'allAbouts.edges.0.node.title.0.text', '') as string;

  return <div>
    <Header />
    {RichText.render(title, () => '/')}
  </div>;
};

Page.getInitialProps = async ({ query, apolloClient }: any) => {
  const { slug } = query;
  const { data } = await apolloClient.query({
    query: PAGE_QUERY,
    variables: { uid: slug === '/' ? 'index' : slug, lang: 'ru' }
  })

  const title = get(data, 'page.title', '') as object;

  return { title };
};

export default withApollo(Page);