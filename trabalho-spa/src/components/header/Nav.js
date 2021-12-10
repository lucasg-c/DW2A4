import React from 'react';
import { Link, Router } from 'react-router-dom';


export default class Nav extends React.Component
{
    render()
    {
        return(
          <div className="nav">            
            <nav className="navbar navbar-expand navbar-dark bg-primary">
              <div className="container">
                  <div className="me-auto navbar-nav">
                  {/* <a href="dex" className="nav-link">Home — Dex</a>
                  <a href="teamviewer" className="nav-link">Page2 — Teamviewer</a>
                  <a href="entries" className="nav-link">Page3 — Entries</a> */}
                  <React.Fragment>
                    <Router>
                    <Link to="/">Home — Dex</Link>
                    <Link to="/teamviewer">Page2 — Teamviewer</Link>
                    <Link to="/entries">Page3 — Entries</Link>
                    </Router>
                  </React.Fragment>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}