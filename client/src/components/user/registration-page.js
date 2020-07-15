import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../../actions';
import axios from 'axios';
import {compose} from "../../utils";
import {withBookstoreService} from "../hoc";
// import LoadingSpinner from "../spinner";
import ErrorBoundry from "../error-boundry";
import './user.css'

class RegistrationPage extends React.Component {
 
  state = {
    email: '',
    password: ''
  }
  
  add = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/auth/register', this.state)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  }
  
  onChangeEmail=(e)=> {
    e.preventDefault()
    this.setState({
      email: e.target.value
    });
  }
  
  onChangePassword=(event)=> {
    event.preventDefault()
    this.setState({
      password: event.target.value
    });
  }
 
  
  
  render() {
    // console.log(this.state.email)
    // console.log(this.state.password)
    return (
      <div>
        <form className="form-signin registration">
          <div className="text-center mb-4">
            <img className="mb-4"
                 src="" alt=""
                 width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal">Registration form</h1>
            
          </div>
          
          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control"
                   placeholder="Email address" required="" autoFocus=""
                   onChange={this.onChangeEmail}
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          
          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control"
                   placeholder="Password" required=""
                   onChange={this.onChangePassword}
            />
            <label htmlFor="inputPassword">Password</label>
          </div>
          <div className="form-label-group">
            <input type="password2" id="inputPassword2" className="form-control"
                   placeholder="Password" required=""/>
            <label htmlFor="inputPassword">Password</label>
          </div>
          
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={this.add}
          >
            Register
          </button>
          <p className="mt-5 mb-3 text-muted text-center">© 2017-2020</p>
        </form>
      </div>
    
    )
  }
}


const mapStateToProps = ({userList: {products, pending, error}}) => {
  return {products, pending, error};
};


const mapDispatchToProps = dispatch => bindActionCreators({
  
  
  fetchUser: fetchUser
  
}, dispatch)


export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(RegistrationPage);
