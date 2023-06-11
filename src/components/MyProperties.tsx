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

export const MyProperties = (props: IMyProperties) => {
  return (
    <div>
      <h5>My Properties</h5>
      <p>
        After buying WAYYYY to many domain names, I've let most expire and I'm
        driven to only own domains that I actively deploy something to. These
        are the ones I own right now. If they have a link, I'm doing great on
        not squatting. No link = no public work (yet)
      </p>
      <ul>
        {props.domainNames.filter((d => {
            if (excludedFromPresentation.includes(d.name)) {
                return false;
            }
            return d;
          }).map((d) => <li><a href={d.url}>{d.name}</a></li>)}
      </ul>
    </div>
  );
};
