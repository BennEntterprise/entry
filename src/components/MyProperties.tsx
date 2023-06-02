// A React component that displays a list of domain names that I own.
import React from 'react'

interface IMyProperties {
    domainNames: Array<string>;
}

export const MyProperties= (props:IMyProperties ) => {
    return (<div>
        {props.domainNames.map(dn =><li>{dn}</li>)}
    </div>)
}