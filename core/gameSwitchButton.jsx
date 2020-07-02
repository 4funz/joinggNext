import React from 'react';
import { connect } from 'react-redux'

function GameSwitchButton(props) {
    return (
        <div>
            <p>Select game</p>
            <button onClick={props.setGame1}> CSGO</button>
            <button onClick={props.setGame2}> dota2</button>
        </div>
    )
}

//
// Maps state from Redux into 'props' so they can be used in the compoennt
//
const mapStateToProps = state => {
    return {
        selectedGame: state.selectedGame,
        gameList: state.gameList
    }
}
//
// Maps actions from Redux into 'props' so they can be used in the compoennt
//
const mapDispatchToProps = dispatch => {
    return {
        setGame1: () => dispatch({ type: 'SET_GAME', value: 0 }),
        setGame2: () => dispatch({ type: 'SET_GAME', value: 1 })
    }
}

//
// export is done something like High Order Component, i do not fully understand, but this is syntax
// connect(*state*, *actions*)(*component_name*)
//
export default connect(mapStateToProps, mapDispatchToProps)(GameSwitchButton)