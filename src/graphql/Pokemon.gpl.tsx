import gql from "graphql-tag";


export const FIND = gql`
  query pokemons($first: Int!) {
      pokemons( first: $first) {
        id
        name
        image
        maxCP
        maxHP
        attacks {
          special{
            name
            damage
          }
        }
      }
  } 
`