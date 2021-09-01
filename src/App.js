import logo from './logo.svg';
// import './App.css';

import React from "react";
// import { listSongs } from "../../graphql/queries";
// import { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">

      <AmplifySignOut/>
      <h1>IoT App</h1>

      
    </div>
  );
}

export default withAuthenticator(App);
