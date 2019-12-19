import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../actions';

const Button = ({ fetchNews }) => (
  <button onClick={fetchNews}>Click for news</button>
);

const mapDispatchToProps = {
  fetchNews: getNews,
};

export default connect(null, mapDispatchToProps)(Button);
