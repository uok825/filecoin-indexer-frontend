import { Page, Text, Divider, Card, Button, Grid, Input, Code, Spacer } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'
import * as React from 'react';
import './App.css';

const projectId = '923cac9743f5b34c7abbdb38ce8a4cc5';
const providerMetadata = {
  name: 'Subpr0br',
  description: 'A Subnet Explorer',
  url: '',
  icons: [''],
  redirect: {
    native: '',
    universal: ''
  }
};



function App() {
  return (
    <Page>
      <Page.Header>
        <Grid.Container justify="center">
          <Grid xs={8} justify="left" >
            <Text h1>Subpr0br</Text>
          </Grid>
          <Grid xs={8} mt="1" justify="center">
            <Input placeholder="Enter a BlockID, TxId, Account etc." scale={4 / 3} width={40}/>
            <Button width={0.4} type="secondary" icon={<Search />}></Button>
          </Grid>
          <Grid xs={8} mt="1"justify="right">
            <Text type="secondary" h3>Wallet Connect</Text>
          </Grid>
        </Grid.Container>
      </Page.Header>
      <Grid.Container justify="space-between" mt="20px">
        <Card justify="left" width="800px">
          <Card.Content>
            <Text b my={0}>Last Blocks</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          <Text>Last Blocks Should Come Here</Text>
          </Card.Content>
        </Card>
        <Spacer y={12} />
        <Card justify="right" width="800px">
          <Card.Content>
            <Text b my={0}>Last Transactions</Text>
          </Card.Content>
          <Divider h="1px" my={0} />
          <Card.Content>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
            <Text>Last Transactions Should Come Here</Text>
          </Card.Content>
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
    </Page>

  );
}

export default App;
