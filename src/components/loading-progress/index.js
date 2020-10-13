import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, makeStyles } from '@material-ui/core';

const GlobalLoading = ({ open }) => {
  const [loading, setLoading] = useState(open);

  const useStyles = makeStyles({
    overlay: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      zIndex: 10000,
    },
    loading: {
      display: 'block',
      margin: '10% auto',
    },
  });

  const classes = useStyles();

  useEffect(() => {
    if (loading !== open) {
      setLoading(open);
    }
  }, [open, loading, setLoading]);

  return loading ? (
    <div className={classes.overlay} open={loading}>
      <CircularProgress size={75} className={classes.loading} />
    </div>
  ) : null;
};

GlobalLoading.propTypes = {
  open: PropTypes.bool,
};

GlobalLoading.defaultProps = {
  open: false,
};

export default GlobalLoading;
