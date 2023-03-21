import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forum from "./pages/forum";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Discussion from "./pages/templates/discussion";
import SignIn from "./pages/sign-in";
import CreateAccount from "./pages/create-account";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/create-account' element={<CreateAccount />} />
        </Routes>
        <Routes>
          <Route path='/community' element={<Forum />} />
          <Route path="/community/:slug" element={<Discussion />} exact />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
