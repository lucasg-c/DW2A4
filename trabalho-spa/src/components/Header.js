import React from 'react';
import Nav from './header/Nav';
//import '../styles/bootstrap.min.css'

// function Header()
// {
//     return(
//         <div>Header component</div>
//     )
// }

export default class Header extends React.Component
{
    render()
    {
        return(
          <div className="header">
            <Nav/>
          </div>
        );
    }
}