import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Collapse } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { Web3Button } from '@web3modal/react'

import Navbar from "../Navbar"
import Footer from "../Footer"
import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';

let blockId = 0;
let blockHeight = 0;
let blockTxs = 0;

function Block() {
  // get block id from url
  const { id } = useParams();

  const [blockDetails, setBlockDetails] = React.useState({});
  const [blockTransactions, setBlockTransactions] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`block?block_id=${id}`, setBlockDetails);
      fetchAPI(`transactions?block_id=${id}`, setBlockTransactions);
    }
  }, []);

  return (
    <Page>
        <Navbar />
        <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
          {blockDetails ? (
            <>
              <Card.Content>
                <Text h4>Block: {blockId}</Text>
              </Card.Content>
              <Card.Content>
                <Text h4>Height: {blockHeight}</Text>
              </Card.Content>
            </>
            ) : (
              <Text h4>Block not found or loading...</Text>
            )}
          </Card>
              <Collapse.Group justify="center" width="1000px" my={2}>
                <Collapse title="Transactions on the block:">
                  {blockTransactions && blockTransactions.map((tx) => (
                    <Text> {tx || ''} </Text>
                  ))}
                </Collapse>
              </Collapse.Group>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default Block;
