import React  from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FIND } from  '../graphql/Pokemon.gpl'
import { IPokemon } from '../interfaces/IPokemon'
import { Pokemon } from '../components/Pokemon'


export function PContainer () {
    
    const { data } = useQuery(FIND,{

        variables: { first: 15}
    })


    return (
        <div  uk-grid="true" className="uk-flex uk-flex-center pokemon uk-grid-match uk-grid-small" >
           {!!data && data.pokemons.map((pokemon: IPokemon) => <Pokemon key={pokemon.id}  pokemon={pokemon} /> )}
        </div>
    )

}