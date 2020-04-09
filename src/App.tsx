import React from 'react';
import ApolloClient  from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PContainer } from './containers/PokemonContainer';
import { Header } from './components/Header';
const client = new ApolloClient({
     uri: `https://graphql-pokemon.now.sh/`
})
function App() {
  return (
    <ApolloProvider client={client  }>
     <main>
       <Header/>
       <PContainer />
     </main>
    </ApolloProvider>
  );
}

export default App;
