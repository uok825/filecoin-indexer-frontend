import * as React from 'react';

import { Page, Text, Card, Grid, Link, Description, Code, Collapse } from '@geist-ui/react'

import Navbar from '../Navbar';
import Footer from '../Footer';

import { useParams } from 'react-router-dom';
import { fetchAPI } from './home';

function Account() {
  const {id} = useParams();
  const [accountDetails, setAccountDetails] = React.useState(null);
  const [accountTransactionDetails, setAccountTransactionDetails] = React.useState([{}]);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`account?accountId=${id}`, setAccountDetails);
    }
  }, []);

  React.useEffect(() => {
    if (id) {
      fetchAPI(`ownedtransactions?accountId=${id}`, setAccountTransactionDetails);
    }
  }, []);

  return (
    <Page>
      <Page.Content>
      <Navbar />
      <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
            {accountDetails ? (
              <>
            <Card >
              <Card.Content>
                <Description title="Address" content={<p><Text b>{id}</Text></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Balances" content=
                {
                <p>
                <Text b>FIL: {accountDetails[0].balance / 10 ** 18}</Text>
                </p>
                } />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Nonce" content={<p><Text b>{accountDetails[0].nonce}</Text></p>} />
              </Card.Content>
            
            </Card>
            <Collapse title="Transactions">
            <p>
            {accountTransactionDetails.map((account) => (
              <Link href={`/transaction/${account.id}`} icon> {account.id || 'TxId not found'} </Link>
            ))}
            </p>
            </Collapse>
            </>
          ) : (
            <Text h4>Account not found or loading...</Text>
          )}
          </Card>
        </Grid.Container>
      </Page.Content>
      <Footer />
    </Page>

  );
}

export default Account;
