import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Spacer, Loading } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { Web3Button } from '@web3modal/react'

import Navbar from "../Navbar"
import Footer from "../Footer"

// url is the API endpoint
// set is the function to set the data
// this is a generic function to fetch data from the API
// you can use this in every component
export const fetchAPI = async (url, set) => {
  const res = await fetch(`http://BASE_URL/${url}`);
  const data = await res.json();
  set(data);
};

function Home() {
  const [blocksData, setBlocksData] = React.useState();
  React.useEffect(() => {
    fetchAPI('lastBlocks', setBlocksData);
  }, []);

  const [transactionData, setTransactionData] = React.useState([{}]);
  React.useEffect(() => {
    fetchAPI('lastTransactions', setTransactionData);
  }, []);

  return (
    <Page>
      <Navbar />
      <Grid.Container justify="space-between" mt="20px">
        <Card justify="left" width="800px">
          <Card.Content>
            <Text b my={0}>Last Blocks</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
        {(typeof blocksData.height !== 'undefined') ? (<Loading>Loading</Loading>) : (
          <p>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          </p>
          )}
          </Card.Content>
        </Card>
        <Spacer y={12} />
        <Card justify="right" width="800px">
          <Card.Content>
            <Text b my={0}>Last Transactions</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
          {(typeof transactionData.block_id !== 'undefined') ? (<Loading>Loading</Loading>) : (
            <p>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            </p>
          )}
          </Card.Content>
        </Card>
      </Grid.Container>
      <Footer />
    </Page>
  );
}

export default Home;
