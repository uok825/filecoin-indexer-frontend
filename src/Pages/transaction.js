import * as React from 'react';

import { Page, Text, Card, Grid, Collapse, Description } from '@geist-ui/react'

import Navbar from "../Navbar"
import Footer from "../Footer"

import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';



function Transaction() {
  const {id} = useParams();
  const [transactionDetails, setTransactionDetails] = React.useState([{}]);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`/transaction?transactionId=${id}`, setTransactionDetails);
    }
  }, []);

  return (
    <Page>
        <Navbar />
        <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
            <Card >
              <Card.Content>
                <Description title="Transaction ID" content={<p><Text b>{id}</Text></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="From" content={<p><Text b>{transactionDetails.map((details)=>(details.from))}</Text></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="To" content={<p><Text b>{transactionDetails.map((details)=>(details.to))}</Text></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Value" content={<p><Text b>{transactionDetails.map((details)=>(details.value))}</Text></p>} />
              </Card.Content>
            </Card>
            <Card>
            <Card.Content>
                <Description title="Gas" content={<p><Text b>Gas Paid: {transactionDetails.map((details)=>(details.gas_premium * details.gas_limit / 10 ** 18))} FIL</Text><div></div><Text b>Gas Price: {transactionDetails.map((details)=>(details.gas_premium / 10 ** 5))} nanoFIL</Text><div><Text b>Gas Limit: {transactionDetails.map((details)=>(details.gas_limit))}</Text></div></p>} />
              </Card.Content>
            </Card>
            <Collapse title="Transaction Data">
            <Text>{transactionDetails.map((details)=>(details.params))}</Text>
            </Collapse>
          </Card>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default Transaction;
