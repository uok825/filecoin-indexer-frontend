import * as React from 'react';

import { Page, Text, Divider, Card, Grid, Spacer, Loading, Link } from '@geist-ui/react'


import Navbar from "../Navbar"
import Footer from "../Footer"

// url is the API endpoint
// set is the function to set the data
// this is a generic function to fetch data from the API
// you can use this in every component
export const fetchAPI = async (url, set) => {
  await fetch(`${url}`).then((res) => res.json()).then(data => set(data));
};

function Home() {
  const [blocksData, setBlocksData] = React.useState([{}]);
  React.useEffect(() => {
    fetchAPI('/lastblocks', setBlocksData);
  }, []);

  const [transactionData, setTransactionData] = React.useState([{}]);
  React.useEffect(() => {
    fetchAPI('/lasttransactions', setTransactionData);
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
          {(typeof blocksData.height !== 'undefined') ? (<Loading>Loading</Loading>) : (
            <p>
            {blocksData.map((block) => (
              <Link href={`/block/${block.id}`} icon> <p>{block.id || 'Block Id not found'}</p> </Link>
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
          {(typeof transactionData.block_id !== 'undefined') ? (<Loading>Loading</Loading>) : (
            <p>
            {transactionData.map((transaction) => (
              <Link href={`/transaction/${transaction.id}`} icon> <p>{transaction.id || 'TxId not found'}</p> </Link>
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
