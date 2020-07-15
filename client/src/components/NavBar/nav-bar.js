import React from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import './navbar.css'
import {fetchNews} from "../../actions";
import {compose} from "../../utils";
import {withBookstoreService} from "../hoc";


class NavBar extends React.Component {
  
  
  render() {
    const { fetchProducts } = this.props
    return (
  
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        {/*<a className="navbar-brand" href="/">Navbar</a>*/}
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarColor03" aria-controls="navbarColor03"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
    
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registrationPage">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ProductView">ProductView</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text"
                   placeholder="Search"/>
              <button className="btn btn-secondary my-2 my-sm-0"
                      type="submit"
                      onClick={fetchProducts}
              >
                Search
              </button>
          </form>
          <li className="nav-item">
            <Link className="nav-link" to="/registrationPage">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
        </div>
      </nav>
      
    )
  }
};

// const mapStateToProps = ({newsList: {products, pending, error}}) => {
//   return {products, pending, error};
// };


const mapDispatchToProps = dispatch => bindActionCreators({
  
  
  fetchProducts: fetchNews
  
}, dispatch)


export default compose(
  withBookstoreService(),
  connect(null, mapDispatchToProps)
)(NavBar);




