import * as React from 'react';

import { Page, Text, Divider, Card, Button, Grid, Input, Collapse, Description, Code } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Button, Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, filecoin, filecoinCalibration, filecoinHyperspace } from 'wagmi/chains'

const projectId = process.env.REACT_APP_PROJECT_ID
const chains = [mainnet, filecoin, filecoinCalibration, filecoinHyperspace]
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function Transaction() {
  return (
    <Page>
      <WagmiConfig config={wagmiConfig}>
        <Page.Header>
          <Grid.Container justify="center">
            <Grid xs={8} justify="left" >
              <Text h1>Subpr0br</Text>
            </Grid>
            <Grid xs={8} mt="1" justify="center">
              <Input placeholder="Enter a BlockID, TxId, Account etc." scale={4 / 3} width={40} />
              <Button width={0.4} type="secondary" icon={<Search />}></Button>
            </Grid>
            <Grid xs={8} mt="1" justify="right">
              <Web3Button type="secondary" />
            </Grid>
          </Grid.Container>
        </Page.Header>
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
        <Page.Footer>
          <ul className="menu menu-horizontal">
            <div className="flex justify-center items-center text-sm">
              <div>
                An experiment by {" "}
                <a
                  href="https://github.com/uok825"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  @uok825 <span>  </span>
                </a>
                & {" "}
                <a
                  href="https://github.com/orkunkilic"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  @orkunkilic
                </a>
              </div>
            </div>
          </ul>
        </Page.Footer>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </Page>

  );
}

export default Transaction;
