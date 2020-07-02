const initialState = {
    selectedGame: 0,
    gameList: [
        {
            name: 'csgo',
            gameID: 1,
            rankPath: '/ranksCSGO',
            rankType: 'custom',
            lobbyList: [
                {
                    currentPlayers: 1,
                    maxPlayers: 4,
                    joinType: 'msgIngame',
                    owner: 'MySteamName'
                },
                {
                    currentPlayers: 2,
                    maxPlayers: 4,
                    joinType: 'joinApply'
                },
                {
                    currentPlayers: 7,
                    maxPlayers: 4,
                    joinType: 'joinNow'
                },
                {
                    currentPlayers: 2,
                    maxPlayers: 4,
                    joinType: 'joinApply'
                },
                {
                    currentPlayers: 2,
                    maxPlayers: 4,
                    joinType: 'joinApply'
                },
            ]
        },
        {
            name: 'dota',
            gameID: 2,
            rankPath: '/ranksDota',
            rankType: 'default',
            lobbyList: [
                {
                    currentPlayers: 1,
                    maxPlayers: 8,
                    joinType: 'joinNow'
                },
                {
                    currentPlayers: 3,
                    maxPlayers: 8,
                    joinType: 'joinApply'
                },
                {
                    currentPlayers: 7,
                    maxPlayers: 8,
                    joinType: 'joinNow'
                },
                {
                    currentPlayers: 7,
                    maxPlayers: 8,
                    joinType: 'msgIngame',
                    owner: 'someGuy'

                },
                {
                    currentPlayers: 7,
                    maxPlayers: 8,
                    joinType: 'joinNow'
                },
            ]
        }
    ]
}

const reducer = (state = initialState, action) => {

    if (action.type === 'SET_GAME') {
        return {
            ...state,
            selectedGame: action.value
        }
    }
    return state
}

export default reducer;