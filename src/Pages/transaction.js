import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Collapse, Description, Code } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { Web3Button } from '@web3modal/react'

import Navbar from "../Navbar"
import Footer from "../Footer"

function Transaction() {
  return (
    <Page>
        <Navbar />
        <Grid.Container justify="center" mt="20px">
          <Card justify="center" width="1000px">
            <Card >
              <Card.Content>
                <Description title="Transaction ID" content={<p><Code>txId</Code></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="From" content={<p><Code>From Address</Code></p>} />
              </Card.Content>
            </Card>
            <Card >
              <Card.Content>
                <Description title="To" content={<p><Code>To Address</Code></p>} />
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Description title="Gas Paid" content={<p><Code>gasPaid</Code></p>} />
              </Card.Content>
              <Card.Content>
                <Description title="Gas Price" content={<p><Code>gasPrice</Code></p>} />
              </Card.Content>
              <Card.Content>
                <Description title="Gas Limit" content={<p><Code>gasLimit</Code></p>} />
              </Card.Content>
            </Card>
            <Collapse title="Transaction Data">
              <Text>Params:</Text>
            </Collapse>
          </Card>
        </Grid.Container>
        <Footer />
    </Page>

  );
}

export default Transaction;
