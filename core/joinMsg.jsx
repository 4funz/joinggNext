import React from 'react';

function JoinMsg(props) {

    return (
    <span style={{backgroundColor: 'yellow'}}>Please message ingame: {props.item.owner}</span>
    )
}

export default JoinMsg