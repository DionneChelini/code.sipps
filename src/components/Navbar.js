import { faHandScissors, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
      <div className='sticky-top bg-purple'>
        <section
          id='navbar'
          className='py-2 d-flex align-items-center justify-content-space-between container-main bg-purple'
        >
          <div className='d-flex align-items-center'>
            <h1 className='f-23 titillium text-white font-weight-bold m-0'>
              Code
              <FontAwesomeIcon
                icon={faHandScissors}
                className='f-20 text-light-blue plp-2'
              />{' '}
              Snips
            </h1>
            <ul className='d-flex m-0 justify-space-between'>
              <Link to='/' className='m-0 pr-1 f-14 text-white cursor-pointer'>
                Database
              </Link>
              <li className='m-0 pr-1 f-14 text-white cursor-pointer '>
                Add Snippet
              </li>
              <li className='m-0 pr-1 f-14 text-white cursor-pointer'>Docs </li>
              <li className='m-0 prp-8 f-14 text-white cursor-pointer'>
                More{' '}
              </li>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='f-19 text-light-blue'
              />{' '}
            </ul>
          </div>
          <div>
            <ul className='d-flex m-0 justify-space-between'>
              <li className='m-0 pr-1 f-14 text-white cursor-pointer'>
                Upgrade
              </li>
              <li className='m-0 pr-1 f-14 text-white cursor-pointer'>Rates</li>
              <li className='m-0 prp-8 f-14 text-white cursor-pointer'>
                My Account
              </li>
              <FontAwesomeIcon
                icon={faAngleDown}
                className='f-19 text-light-blue pr-1'
              />{' '}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navbar;
