import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink}
   from "@apollo/client";

function App() {
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://web-tools.tokopedia.com/postgres/v1/graphql"
  });
  return (
    <ApolloProvider client={client}>
     <Home /> 
    </ApolloProvider>
  );
}

export default App;
