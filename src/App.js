import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";

// early sunny awake mixed sign sure window bomb meadow buffalo exclude avocado

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData();
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://127.0.0.1:8545");
    // const network = await web3.eth.net.getNetworkType();
    // needed to enable the connection
    await window.ethereum.enable();
    // get accounts
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    console.log("accounts", accounts[0]);
  }

  constructor(props) {
    super(props);
    this.state = { account: "" };
  }

  render() {
    return (
      <div className="container">
        <h1>Blockchain Todo</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
