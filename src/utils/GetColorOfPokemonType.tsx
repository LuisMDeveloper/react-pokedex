export function getColorOfPokemonType(type: string) {
    switch (type) {
        case 'grass':
            return '#74CB48'
        case 'fire':
            return '#F57D31'
        case 'water':
            return '#6493EB'
        case 'bug':
            return '#A7B723'
        case 'normal':
            return '#AAA67F'
        case 'electric':
            return '#F9CF30'
        case 'poison':
            return '#B97FC9'
        case 'ground':
            return '#E2BF65'
        case 'fairy':
            return '#FDB9E9'
        case 'fighting':
            return '#C22E28'
        case 'psychic':
            return '#F95587'
        case 'rock':
            return '#B6A136'
        case 'ghost':
            return '#70559B'
        case 'ice':
            return '#96D9D6'
        case 'dragon':
            return '#6F35FC'
        case 'dark':
            return '#705746'
        case 'steel':
            return '#B7B7CE'
        case 'flying':
            return '#A98FF3'
        default:
            return '#FFFFFF'
    }
}
