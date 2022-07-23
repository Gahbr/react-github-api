import React from "react";
import Layout from "./components/layout";
import Profile from './components/Profile';
import { ResetCSS } from "./global/resetCss";

function App() {
  return (
    <main>
      <ResetCSS/>
      <Layout>
        <div> </div>
        <Profile></Profile>
        <div>Repositories</div>
        <div>Starred</div>
      </Layout>
    </main>
  );
}

export default App;
