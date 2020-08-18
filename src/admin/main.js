import React from 'react';
import Dashboard from './company';
import Intern from './inetrns';
import Navbar from './navbar';
import './admin.css';

import {NavLink} from 'react-router-dom';
const Main = () => {
    return (
        <div className="container-fluid">
            <Navbar/>
            <br /><br /><br />
           
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-6 ">
                      <div className="card text-center admin-card">
                          <br/>
                          <p className="admin-heading"><NavLink to="/admin/internship">INTERNSHIP</NavLink></p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-6">
                      <div className="card text-center admin-card">
                          <br/>
                          <p className="admin-heading"><NavLink to="/admin/companies">COMPANIES</NavLink></p>
                      </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
            
            <br/><br/>
            
        </div >
    )
}

export default Main;