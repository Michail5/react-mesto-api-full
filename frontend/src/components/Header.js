import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Header({ onSignOut }) {
  const location = useLocation().pathname;
  const authed = React.useContext(AuthContext);
  
 
  const [menuOpened, setMenuOpened] = useState(false);
  const userEmail = localStorage.getItem('email');
  const handleSignOut = () => {
    setMenuOpened(false);
    onSignOut();
  };
  const renderBurger = () => setMenuOpened(!menuOpened);
  const linkTitle = !authed ? (location === '/sign-in' ? "Регистрация" : "Войти") : "Выйти";
  const linkDest = !authed ? (location === '/sign-in' ? '/sign-up' : '/sign-in') : "/sign-in";
 

  return (
    <>
      <div className={`burger ${menuOpened ? 'burger_type_active' : ''}`}>
        <p className="burger__text">{userEmail}&nbsp;</p>
        <Link className="burger__link" to={linkDest} onClick={handleSignOut}>
          {linkTitle}
        </Link>
      </div>
      <header className="header">
        <div className="header__logo" title="Mesto" />
        <div className="header__actions">
          <p className="header__text">{userEmail}&nbsp;</p>
          <Link
            to={linkDest}
            className={`header__link ${authed && 'header__link_idle-on-mobile'}`}
            onClick={handleSignOut}
          >
            {linkTitle}
          </Link>
          <button
            className={`${authed ? 'header__burger' : 'header__burger_idle'} ${
              menuOpened ? 'header__burger_type_close' : ''
            }
            `}
            type="button"
            onClick={renderBurger}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
