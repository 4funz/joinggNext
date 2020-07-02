import React, { Suspense } from 'react';

function JoinButton(props) {
//
//Looks at lobby item data, gets type of 'join' then sets which component to import
//
    let joinPath = '/joinNow'
    if (props.item.joinType === 'joinApply') {
        joinPath = '/joinApply'
    }
    if (props.item.joinType === 'msgIngame') {
        joinPath = '/joinMsg'
    }
//
// Imports component
//
    const JoinButton = React.lazy(() => import(`.${joinPath}`));

    return (
        <Suspense fallback='Loading'>
            <JoinButton item={props.item} />
        </Suspense>
    )
}

export default JoinButton