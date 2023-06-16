import { Button, Grid, Input, Page, Text, Link } from '@geist-ui/react'
import { Search } from '@geist-ui/react-icons'
import { Web3Button } from '@web3modal/react'
import React from 'react'

const Navbar = () => {
  return (
    <Page.Header>
        <Grid.Container justify="center">
        <Grid xs={8} justify="left" >
            <Link href="/"><Text h1>Subpr0br</Text></Link>
        </Grid>
        <Grid xs={8} mt="1" justify="center">
            <Input placeholder="Enter a BlockID, TxId, Account etc." scale={4 / 3} width={40}/>
            <Button width={0.4} type="secondary" icon={<Search />}></Button>
        </Grid>
        <Grid xs={8} mt="1"justify="right">
            <Web3Button type="secondary" />
        </Grid>
        </Grid.Container>
    </Page.Header>
  )
}

export default Navbar