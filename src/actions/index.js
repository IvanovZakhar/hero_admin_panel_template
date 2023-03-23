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
    console.log(newHero)
    return {
        type: 'HEROES_FETCHING_ADD',
        payload: newHero
    }
}