import * as React from 'react';

import { Page, Text, Card, Grid, Collapse, Description, Link } from '@geist-ui/react'

import Navbar from "../Navbar"
import Footer from "../Footer"

import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';



function CrossChain() {
  const {id} = useParams();
  const [crosschainDetails, setcrosschainDetails] = React.useState([{}]);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`crosschain?transactionId=${id}`, setcrosschainDetails);
    }
  }, []);

  return (
    <Page>
        <Navbar />
        <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
            <Card >
              <Card.Content>
                <Description title="CrossChain ID" content={<p><Text b>{id}</Text></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="From" content={<p><Link href={`/account/${crosschainDetails.map((details)=>(details.from))}`}b>{crosschainDetails.map((details)=>(details.from))}</Link></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="To" content={<p><Link href={`/account/${crosschainDetails.map((details)=>(details.to))}`}b>{crosschainDetails.map((details)=>(details.to))}</Link></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Value" content={<p><Text b>{crosschainDetails.map((details)=>(details.value))}</Text></p>} />
              </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Description title="Gas" content={<p><Text b>Gas Paid: {crosschainDetails.map((details)=>(details.gas_premium * details.gas_limit / 10 ** 18))} FIL</Text><div></div><Text b>Gas Price: {crosschainDetails.map((details)=>(details.gas_premium / 10 ** 5))} nanoFIL</Text><div><Text b>Gas Limit: {crosschainDetails.map((details)=>(details.gas_limit))}</Text></div></p>} />
              </Card.Content>
            </Card>
            <Collapse title="CrossChain Data">
            <Text>{crosschainDetails.map((details)=>(details.params))}</Text>
            </Collapse>
          </Card>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default CrossChain;
