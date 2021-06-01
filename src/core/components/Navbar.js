import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import project from '../../img/project.svg';

export const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-light mb-3"
        style={{ backgroundColor: '#DCDCDC' }}
      >
        <div className="container">
          <a className="navbar-brand text-uppercase font-weight-bold" href="/#">
            <img
              src={project}
              alt=""
              style={{ width: '50px', marginRight: '10px' }}
            />
            Task Manager
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setCollapsed(prev => !prev)}
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={'collapse navbar-collapse ' + (collapsed ? '' : 'show')}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/playlists"
                  activeClassName="text-primary active"
                >
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/search"
                  activeClassName="text-primary active"
                >
                  Tasks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/tracks"
                  activeClassName="text-primary active"
                >
                  Scrum
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/kanban"
                  activeClassName="text-primary active"
                >
                  Kanban
                </NavLink>
              </li>
            </ul>
            <div className="navbar-text m-auto">
              <UserWidget />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

export const UserWidget = () => {
  // const { login, logout, user } = useContext(UserContext);

  return (
    <div>
      <span>
        Welcome USER |<span className="text-primary"> Logout</span>
      </span>
      <span>
        Welcome Guest |<span className="text-primary"> Login</span>
      </span>
    </div>
  );
};
