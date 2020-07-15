import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../../actions/index';
import LoadingSpinner from '../spinner';
import { compose } from "../../utils";
import { withBookstoreService } from "../hoc";
import ErrorBoundry from "../error-boundry";

class ProductView extends Component {
  
  componentDidMount() {
    this.props.fetchProducts();
  }
  
  render() {
    
    const {pending, error, products } = this.props;

    if (pending) {
      return (
        <LoadingSpinner/>
      )
    }
    if (error) {
      return (
        <ErrorBoundry/>
      )
    } else {
      return (
        <div className='product-list-wrapper'>
          <News products={ products }/>
        </div>
      )
    }
  }
}

const News = ({products}) => {
  const news = products.map((news, index) =>
    <li key={index}>
      
      
      <div className="jumbotron">
        
        <img src={news.urlToImage}
             alt={news.urlToImage}
        />
        <h3 className="display-8">{news.title}</h3>
        <h3 className="display-8">{news.author}</h3>
        <p className="lead">
          {news.description}
        </p>
        <p className="lead">
          {news.content}
        </p>
        <hr className="my-4"/>
        
        <p className="lead">
          <a className="btn btn-primary btn-lg" href={news.url} role="button">Learn
            more</a>
        </p>
        <p>{news.publishedAt.slice(0, 10)}</p>
      </div>
    
    </li>
  );
  return (
    
    <ul>{news}</ul>
  
  )
}


const mapStateToProps = ({newsList: {products, pending, error}}) => {
  return {products, pending, error};
};


const mapDispatchToProps = dispatch => bindActionCreators({
  
  
  fetchProducts: fetchNews
  
}, dispatch)


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductView);
