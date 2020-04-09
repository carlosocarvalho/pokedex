import React from 'react'
import { IPokemon, IPokemonAttack } from '../interfaces/IPokemon'
import { PokeCard, PokeCardAttacks, PokeCardImageContainer, PokeCardContainerMeta } from '../ComponentsStyled'

type PokemonProps = {
    pokemon: IPokemon
}

export function Pokemon(props: PokemonProps) {
    const { pokemon } = props
    return (
        <div className="uk-width-1-5@m ">
            <PokeCard className="pokemon__card uk-card-default uk-card  ">
                <PokeCardImageContainer className="uk-card-media-top">
                    <img  src={pokemon.image} alt={pokemon.name} />
                </PokeCardImageContainer>
                <PokeCardContainerMeta className="uk-card-body">
                    <div className="pokemon__name">
                        <h3 className="uk-card-title">{pokemon.name}</h3>
                    </div>
                    <div className="pokemon__meta uk-text-meta ">
                        <span> <strong>MaxCP:</strong> {pokemon.maxCP}</span> <br />
                        <span><strong>MaxHP:</strong> {pokemon.maxHP}</span>
                    </div>
                    <PokeCardAttacks>
                        {!!pokemon.attacks && !!pokemon.attacks.special && pokemon.attacks.special.map((attack: IPokemonAttack) => (
                            <span className="uk-label" key={`${attack.name}__${attack.damage}`}>
                                {attack.name}
                            </span>
                        ))}
                    </PokeCardAttacks>
                </PokeCardContainerMeta>

            </PokeCard>
        </div>

    )
}