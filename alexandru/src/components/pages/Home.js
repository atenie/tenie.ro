import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SpinnerElement from '../layout/SpinnerElement';

const Home = ({ loading, titles }) => {
  if (loading) {
    return (
      <Fragment>
        <center>
          <p className='ramblings'>My ramblings:</p>
          <SpinnerElement />
        </center>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <center>
          <p className='ramblings'>My ramblings:</p>
          {titles.map((titles) => (
            <p key={titles.item}>
              <Link className='item-links' to={'/post/' + titles.item}>
                {titles.item}
              </Link>
            </p>
          ))}
        </center>
      </Fragment>
    );
  }
};

Home.propTypes = {
  titles: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
