import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { motion } from 'framer-motion';
import { faSadTear, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Alerts = () => {
  const alertContext = useContext(AlertContext);

  if (!alertContext.alerts) return null;

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <motion.div
        key={alert.id}
        className={`${alert.type} justify-content-center text-dark align-items-center pp-10 f-21 rounded-lg titillium z-depth-1`}
        initial={{ x: '50px' }}
        animate={{ x: '0px', type: 'spring' }}
      >
        {alert.type === 'bg-yellow' ? (
          <FontAwesomeIcon icon={faSadTear} className='text-dark f-21 prp-5' />
        ) : (
          <FontAwesomeIcon
            icon={faCheckCircle}
            className='text-dark f-21 prp-5'
          />
        )}

        {alert.msg}
      </motion.div>
    ))
  );
};

export default Alerts;
