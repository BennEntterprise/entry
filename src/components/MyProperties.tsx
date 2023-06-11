// A React component that displays a list of domain names that I own.
import React from 'react';

interface IMyProperties {
  domainNames: Array<string>;
}

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
        {props.domainNames.map((dn) => (
          <li>{dn}</li>
        ))}
      </ul>
    </div>
  );
};
