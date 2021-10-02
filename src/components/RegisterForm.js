import React, { useState, useContext, useEffect } from 'react'
import UserAccontFormComponent from './UserAccountFormComponent';
import AlertContext from '../../context/AlertState/alertContext';
import AuthContext from '../../context/AuthState/authContext';
import UiContext from '../../context/UiState/uiContext';
import { withRouter } from 'react-router-dom';


const RegisterForm = () => {
    const uiContext = useContext(UiContext);
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { colorTheme, signUpFormDisplay, setSignUpFormDisplay, setFadeOutLoader } = uiContext;
    const { setAlert } = alertContext;
    const { register, error, clearErrors } = authContext;

    useEffect(() => {
        if (error === 'Username already exists' || error === 'Email already exists') {
            setAlert(error, 'error');
        }
        clearErrors();
        // eslint-disable-next-line
    }, [error])

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const { username, email, password, confirmPassword } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '' || password === '') {
            setAlert('Please ensure all fields are filled out', 'error');
        } else if (password !== confirmPassword) {
            setAlert('Passwords do not match', 'error');
        } else {
            register(user);
            setSignUpFormDisplay(false);
            setFadeOutLoader(false);
        }
    }

    const closeLightbox = () => {
        setSignUpFormDisplay(false);
        setFadeOutLoader(false);
    }
    const lightboxVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
        exit: {
            opacity: 0
        }
    }

    return (
        signUpFormDisplay &&
        <UserAccontFormComponent
            title={'Register Account'}
            heading={'Every Woman/\'s Wardrobe'}
            iconOne={<i className="fab fa-facebook-f f-18 icon-round-border pp-8 mr-1"></i>}
            iconTwo={<i className="fab fa-google f-18 mr-1 icon-round-border pp-8 "></i>}
            iconThree={<i className="fab fa-linkedin-in f-18 icon-round-border pp-8 "></i>}
            closeLightbox={closeLightbox}
            onSubmit={onSubmit}
            onChange={onChange}
            colorTheme={'green'}
            buttonText={'Sign Up Account'}
            link1={'Forgot your password?'}
            link2={'No Account!'}
            link3={'Sign up now'}

        />
    )
}

export default RegisterForm

{/* <i className="fab fa-facebook-f f-18 icon-round-border pp-8 mr-1"></i>
<i className="fab fa-google f-18 mr-1 icon-round-border pp-8 "></i>
<i className="fab fa-linkedin-in f-18 icon-round-border pp-8 "></i> */}