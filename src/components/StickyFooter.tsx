import React from "react";

export const StickyFooter = () => {
  const [stickyFooterIndex, setStickyFooterIndex] = React.useState(0)
  
  const github = <p>Made with ❤️ Using <a href='https://github.com' className='footer-link'>Github</a></p>;
  const changelog = <p>Has a change log inspired by <a href='https://keepachangelog.com/en/1.0.0/' className='footer-link'> keepachangelog.com</a></p>;
  // const watchdog = <p>Watchdog services provided by <a href='https://snyk.io/'>Snyk</a></p>;
  const conventionalCommits = <p>Commits follow <a href='https://www.conventionalcommits.org/en/v1.0.0/' className='footer-link'>conventional commits</a></p> 
  const frontendLogging = <p>Error and Exception handling gracefully traiged using <a href='Sentry.io' className='footer-link'>Sentry</a></p> 
  
  
  const options = [
    github,
    // watchdog,
    frontendLogging,    
    conventionalCommits,
    changelog,
  ];
  

  
  React.useEffect(()=>{
     const nextIndexRotator = setInterval(() =>{
         const nextIdx = Math.floor(Math.random()*Math.floor(options.length))
         console.log('nextIdx', nextIdx)
         setStickyFooterIndex(nextIdx)
     }, 15_000)
     return () => clearInterval(nextIndexRotator)
  },[])
  

  return (
    <div id="footer-right">
      {options[stickyFooterIndex]}
    </div>
  );
};
