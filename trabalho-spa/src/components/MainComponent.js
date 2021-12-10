import React from 'react';
import '../styles/global.css'

import Header from './Header';

import { Outlet } from 'react-router-dom';

export default class Main extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <Header/>
                <div className="main-content">
                    <h1 className="page-title">Titulo</h1>
                    <Outlet/>
                </div>
            </React.Fragment>
        )
    }
}