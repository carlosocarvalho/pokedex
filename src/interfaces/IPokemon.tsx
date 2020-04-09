

export interface IPokemon{
    id: string
    name: string
    image: string
    maxHP: number
    maxCP: number
    attacks?: IPokemonAttacks

}

export interface IPokemonAttacks{
    
    special?: Array<IPokemonAttack>
}


export interface IPokemonAttack{
    
    name: string
    damage: string
}
