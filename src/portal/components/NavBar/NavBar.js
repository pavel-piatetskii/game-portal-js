import React, { useState } from 'react';
import './NavBar.scss'
import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';

export default function NavBar(props) {

  const {setContent} = props;
  const [showSignInForm, setShowSignInForm] = useState(false);

    return (<nav className="navbar">
    <div className="navbar__left">
      <Link className="navbar__menu-item" to='/'>HOME</Link>
      <Link className="navbar__menu-item" to='/games'>GAMES</Link>
      <Link className="navbar__menu-item" to='/highscores'>HIGHSCORES</Link>
    </div>
    <div className="navbar__center">
      <span>GAME</span>
      <i className="fa fa-shield navbar__center__icon"></i>
      <span>PORTAL</span>
    </div>
      <div className="navbar__right">
        {!showSignInForm && (<div className="navbar__right__buttons">
          <Link className="navbar__menu-item" to='signup'>SIGN UP</Link>
          <p className="navbar__menu-item" onClick={() => setShowSignInForm(true)}>SIGN IN</p>
        </div>)}
        {showSignInForm && <SignInForm setShowSignInForm={setShowSignInForm}/>}
      </div>

    </nav>)
}