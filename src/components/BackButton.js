import { Link } from 'react-router-dom';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BackButton = () => {
  return (
    <div className='d-flex align-items-center  justify-content-space-between'>
      <h5 className='titillium f-24 text-dark-grey m-0'>
        <Link to='/' className='btn btn-lg text-dark border  B612 mr-1'>
          {' '}
          <FontAwesomeIcon icon={faAngleLeft} className='text-dark prp-5' />
          BACK
        </Link>
      </h5>
    </div>
  );
};

export default BackButton;
