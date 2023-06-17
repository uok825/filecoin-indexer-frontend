import * as React from 'react';

import { Page, Text, Card, Grid, Collapse, Link } from '@geist-ui/react'


import Navbar from "../Navbar"
import Footer from "../Footer"
import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';


function CrossChainBlock() {
  // get crosschainBlock id from url
  const { id } = useParams();

  const [crosschainBlockDetails, setcrosschainBlockDetails] = React.useState(null);
  console.log(crosschainBlockDetails)
  const [crosschainBlockTransactions, setcrosschainBlockTransactions] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`crosschains?block_id=${id}`, setcrosschainBlockDetails);
      fetchAPI(`corsschain?transactionId=${id}`, setcrosschainBlockTransactions);
    }
  }, []);

  return (
    <Page>
        <Navbar />
        <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
          {crosschainBlockDetails ? (
            <>
              <Card.Content>
                <Text h4>crosschainBlock: {id}</Text>
              </Card.Content>
              <Card.Content>
                <Text h4>Height: {crosschainBlockDetails.map((crosschainBlock) => (crosschainBlock.height))}</Text>
              </Card.Content>
            </>
            ) : (
              <Text h4>crosschainBlock not found or loading...</Text>
            )}
          </Card>
              <Collapse.Group justify="center" width="1000px" my={2}>
                <Collapse title="Transactions on the crosschainBlock:">
                  {crosschainBlockTransactions && crosschainBlockTransactions.map((tx) => (
                    <Link href={`/transaction/${tx.id}`} icon> {tx.id || ''} </Link>
                  ))}
                </Collapse>
              </Collapse.Group>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default CrossChainBlock;
