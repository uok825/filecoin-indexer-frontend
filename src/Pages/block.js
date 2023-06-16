import * as React from 'react';

import { Page, Text, Card, Grid, Collapse } from '@geist-ui/react'


import Navbar from "../Navbar"
import Footer from "../Footer"
import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';


function Block() {
  // get block id from url
  const { id } = useParams();

  const [blockDetails, setBlockDetails] = React.useState(null);
  console.log(blockDetails)
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
                <Text h4>Block: {id}</Text>
              </Card.Content>
              <Card.Content>
                <Text h4>Height: {blockDetails.map((block) => (block.height))}</Text>
              </Card.Content>
            </>
            ) : (
              <Text h4>Block not found or loading...</Text>
            )}
          </Card>
              <Collapse.Group justify="center" width="1000px" my={2}>
                <Collapse title="Transactions on the block:">
                  {blockTransactions && blockTransactions.map((tx) => (
                    <Text> {tx.id || ''} </Text>
                  ))}
                </Collapse>
              </Collapse.Group>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default Block;
