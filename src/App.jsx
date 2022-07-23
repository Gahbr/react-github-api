import React from "react";
import Layout from "./components/layout";
import Profile from './components/Profile';
import Repositories from "./components/repositories";
import { ResetCSS } from "./global/resetCss";

function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>
        <div> </div>
        <Profile></Profile>
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
