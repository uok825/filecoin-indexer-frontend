import React from 'react'
import ReactDOM from 'react-dom'
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/home"
import Block from "./Pages/block"
import Account from "./Pages/account"
import Transaction from "./Pages/transaction"

ReactDOM.render(
  <React.StrictMode>
    <GeistProvider>
      <CssBaseline />
      <Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/block" element={<Block />} />
      <Route path="/account" element={<Account />} />
			<Route path="/transaction" element={<Transaction />} />
		</Routes>
	</Router>
    </GeistProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)