import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const GlobalLoading = () => {

  const useStyles = makeStyles({
    overlay: {
      position: 'absolute',
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

  return (
    <div className={classes.overlay} >
      <CircularProgress className={classes.loading} size={75} />
    </div>
  );
};

export default GlobalLoading;
