import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Forum from "./pages/forum";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Discussion from "./pages/templates/discussion";
import SignIn from "./pages/sign-in";
import CreateAccount from "./pages/create-account";
import Topic from "./pages/templates/topic";

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
});

function App() { 

  if(!localStorage.getItem('user') && window.location.pathname != '/' && window.location.pathname != '/create-account'){
    window.location.href = '/';
  }

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
          <Route path="/community/:parent/:slug" element={<Topic />} exact />
          <Route path="/community/categories/:slug" element={<SignIn />} exact />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
