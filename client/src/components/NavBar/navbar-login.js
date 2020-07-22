import React from 'react'
import {Link} from "react-router-dom"
import {userAction} from '../../actions'


export class NavBarLogin extends React.Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-xl navbar-light bg-light"
           style={{marginBottom: "30px"}}
      >
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarColor03" aria-controls="navbarColor03"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">News</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart Page</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            <form className="forn form-inline my-2 my-lg-0"
                  style={{paddingLeft: "350px"}}
            >
              <input className="form-control mr-sm-2" type="text"
                     placeholder="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0"
                      type="submit"
              >
                Search
              </button>
            </form>
            <li className="nav-item">
              <Link className="nav-link"
                    style={{marginLeft: "10px"}}
                    to="/"
                    onClick={() => userAction.logout()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}




