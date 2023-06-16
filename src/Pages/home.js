import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Spacer, Loading } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { Web3Button } from '@web3modal/react'

import Navbar from "../Navbar"
import Footer from "../Footer"
import { Link } from 'react-router-dom';

// url is the API endpoint
// set is the function to set the data
// this is a generic function to fetch data from the API
// you can use this in every component
export const fetchAPI = async (url, set) => {
  const res = await fetch(`http://localhost:3002/${url}`);
  console.log(res)
  const data = await res.json();
  set(data);
};

function Home() {
  const [blocksData, setBlocksData] = React.useState();
  const [transactionData, setTransactionData] = React.useState();
  React.useEffect(() => {
    fetchAPI('lastBlocks', setBlocksData);
    fetchAPI('lastTransactions', setTransactionData);
  }, []);

  return (
    <Page>
      <Navbar />
      <Grid.Container justify="space-between" mt="20px">
        <Card justify="left" width="800px">
          <Card.Content>
            <Text h3 my={0}>Last Blocks</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
        {!blocksData ? (<Loading>Loading</Loading>) : (
          <p>
            {blocksData.map((block) => (
              <Link to={`/block/${block.id}`} icon> <p>{block.id || 'Block Id not found'}</p> </Link>
            ))}
          </p>
          )}
          </Card.Content>
        </Card>
        <Spacer y={12} />
        <Card justify="right" width="800px">
          <Card.Content>
            <Text h3 my={0}>Last Transactions</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
          {!transactionData ? (<Loading>Loading</Loading>) : (
            <p>
              {transactionData.map((transaction) => (
                <Link to={`/transaction/${transaction.id}`} icon> <p>{transaction.id || 'TxId not found'}</p> </Link>
              ))}
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
