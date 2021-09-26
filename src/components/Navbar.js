import { faBrain, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <div className='sticky-top bg-white'>
        <section
          id='navbar'
          className='py-2 d-flex align-items-center justify-content-space-between container-main bg-white'
        >
          <div className='d-flex align-items-center'>
            <h1 className='f-23 titillium text-navy font-weight-bold m-0'>
              <FontAwesomeIcon icon={faBrain} className='f-20 text-pink' />{' '}
              Code.Reps
            </h1>
            <ul className='d-flex m-0 justify-space-between'>
              <li className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'>
                Extensions
              </li>
              <Link
                to='/'
                className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'
              >
                Cards
              </Link>
              <li className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'>
                Snippets
              </li>
              <li className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'>
                Hotkeys
              </li>
              <li className='m-0 prp-8 f-14 text-dark-grey cursor-pointer'>
                Train{' '}
              </li>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='f-19 text-blue pr-1'
              />{' '}
              <li className='m-0 prp-8 f-14 text-dark-grey cursor-pointer'>
                More{' '}
              </li>
              <FontAwesomeIcon icon={faAngleDown} className='f-19 text-blue' />{' '}
            </ul>
          </div>
          <div>
            <ul className='d-flex m-0 justify-space-between'>
              <li className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'>
                Upgrade
              </li>
              <li className='m-0 pr-1 f-14 text-dark-grey cursor-pointer'>
                Rates
              </li>
              <li className='m-0 prp-8 f-14 text-dark-grey cursor-pointer'>
                My Account
              </li>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='f-19 text-blue pr-1'
              />{' '}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
