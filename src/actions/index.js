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

export const heroesFetchingDelete = (id) => {
    return {
        type: 'HEROES_FETCHING_DELETE',
        id: id
    }
}

export const onAddHeroesFetching = (newHero) => {
    return {
        type: 'HEROES_FETCHING_ADD',
        payload: newHero
    }
}

export const filtersFetched = (filters) => {
 
    return {
        type: 'FILTERS_FETCHING',
        filterElements: filters
    }
}

export const onUpCondition = (status) => {
    return {
        type: 'FILTER_CONDITION_FETCHING',
        condition: status
    }
}