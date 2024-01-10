export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroDeleted = (id) => {
    return {
        type: 'HEROE_DELETED',
        id
        
    }
}
export const heroCreate = (name, description, element, id) => {
    return {
        type: 'HEROE_CREATE',
        data: name, description, element, id
        
    }
}
