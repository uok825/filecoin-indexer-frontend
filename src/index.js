import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import {mainnet, filecoin, filecoinCalibration, filecoinHyperspace } from 'wagmi/chains'

import Home from "./Pages/home"
import Block from "./Pages/block"
import Account from "./Pages/account"
import Transaction from "./Pages/transaction"

const projectId = process.env.REACT_APP_PROJECT_ID
const chains = [mainnet,filecoin,filecoinCalibration,filecoinHyperspace]
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 2, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

ReactDOM.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      <GeistProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/block/:id" element={<Block />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/transaction/:id" element={<Transaction />} />
          </Routes>
        </Router>
      </GeistProvider>
    </WagmiConfig>
  </React.StrictMode>,
  document.getElementById('root'),
)