const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        default: return state

        case 'HEROE_DELETED':
          
            const filteredHero = state.heroes.filter(hero => hero.id !== action.id);
            console.log(filteredHero)
            return {
                ...state,
                heroes: filteredHero
            };
    }
}

export default reducer;