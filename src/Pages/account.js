import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Description, Code, Collapse } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { Web3Button } from '@web3modal/react'

function Account() {
  return (
    <Page>
      <Page.Content>
      <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
            <Card >
              <Card.Content>
                <Description title="Address" content={<p><Code>if have ens 'ens' | Address</Code></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Balances" content=
                {
                <p>
                <Code>Token 1:</Code>
                <div></div>
                <Code>Token 2:</Code>
                <div></div>
                <Code>Token 3:</Code>
                </p>
                } />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="Nonce" content={<p><Code>Nonce Count</Code></p>} />
              </Card.Content>
            </Card>
            <Collapse title="Transactions">
              <Text>Transaction 1:</Text>
              <Text>Transaction 2:</Text>
              <Text>Transaction 3:</Text>
            </Collapse>
          </Card>
        </Grid.Container>
      </Page.Content>
    </Page>

  );
}

export default Account;
