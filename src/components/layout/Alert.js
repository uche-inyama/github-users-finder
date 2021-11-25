import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import AlertContext from '../context/alert/alertContext';

const Alert = () => {
  const Context = useContext(AlertContext)
  const { alert } = Context
   return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/> {alert.msg}
      </div>
    )
  )
};

export default Alert
