import React, { Suspense } from 'react';
import { connect } from 'react-redux'
import JoinButton from './joinButton'

function LobbyList(props) {
//
// Looks at gameList object of selected game
// then take type of 'rank' this game has, take string from object and imports this component
//
    const rankPath = props.gameList[props.selectedGame].rankPath
    const Ranks = React.lazy(() => import(`.${rankPath}`));

    return (
        <div style={{ backgroundColor: 'blue' }}>

{/* Takes games lobbylist, maps it to create lobby listings */}

            {props.gameList[props.selectedGame].lobbyList.map((item) =>
                <div style={{ border: '1px solid black', width: '400px', margin: 'auto' }}>
                    <p>{item.currentPlayers}/{item.maxPlayers}</p>
                    <Suspense fallback='Loading'>
                        <Ranks />
                    </Suspense>
                    <JoinButton
                    item = {item}/>
                </div>
            )}

        </div>
    )
}
//
// Maps state from Redux into 'props' so they can be used in the compoennt
//
const mapStateToProps = state => {
    return {
        gameList: state.gameList,
        selectedGame: state.selectedGame
    }
}
//
// export is done something like High Order Component, i do not fully understand, but this is syntax
// connect(*state*, *actions*)(*component_name*)
//

export default connect(mapStateToProps, null)(LobbyList)