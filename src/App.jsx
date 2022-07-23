import React from "react";
import Layout from "./components/layout";
import Profile from './components/Profile';
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCss";
import GithubProvider from "./providers/github-provider";

function App() {
  return (
    <main>
      <GithubProvider>
      <ResetCSS/>
      <Layout>
        <div> </div>
        <Profile></Profile>
        <Repositories />
      </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
