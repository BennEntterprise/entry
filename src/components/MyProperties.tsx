// A React component that displays a list of domain names that I own.
import React from 'react'
import { IDomain } from '../App';

interface IMyProperties {
    domainNames: Array<IDomain>;
}

const excludedFromPresentation = [
    'wussickcontracting.com',
    'kylebennett.design',
]

export const MyProperties= (props:IMyProperties ) => {
    return (<div>
        {props.domainNames.filter((d => {
            if (excludedFromPresentation.includes(d.name)) {
                return false;
            }
            return d;
        })).map(dn =><li><a href={dn.url } rel='noreferrer'>{dn.name}</a></li>)}
    </div>)
}