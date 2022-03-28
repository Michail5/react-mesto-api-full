import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import React from "react";
import {projectApi} from "../utils/projectApi";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import {Route, Routes, useNavigate} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Register from "./Register";
import Login from "./Login";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth"

function App() {
  const navigate = useNavigate()
  const [isInitialized, setIsInitialized] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const [currentUserEmail, setCurrentUserEmail] = React.useState("");

  React.useEffect(() => {
    auth.checkToken().then((res) => {
      if (res) {
        setCurrentUserEmail(res.user.email);
        setLoggedIn(true);
        navigate("/");
        Promise.all([projectApi.getInitialCards().then((resultInitialCards) => setCards(resultInitialCards.cards)),
          projectApi.getUserInfo().then((resultUserInfo) => {
            setCurrentUser({
              name: resultUserInfo.user.name,
              about: resultUserInfo.user.about,
              avatar: resultUserInfo.user.avatar,
              _id: resultUserInfo.user._id
            });
          })])
          .then(() => setIsInitialized(true))
          .catch((error) => console.error(error))
      } else {
        setIsInitialized(true);
      }
    }).catch((error) => {
      setIsInitialized(true);
      console.error(error)}
    );
  }, [navigate]);

  function handleCardLike(card) {
    const isLiked = card.likes.includes(currentUser._id);
    projectApi.handleLikeButton(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard.card : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    projectApi.deleteCard(card._id)
      .then(() => {
        setCards(cards.filter(obj => obj._id !== card._id))
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, about) {
    projectApi.patchUserInfo(name, about)
      .then((resultUserInfo) => {
        setCurrentUser({
          name: resultUserInfo.user.name,
          about: resultUserInfo.user.about,
          avatar: resultUserInfo.user.avatar,
          _id: resultUserInfo.user._id
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(link) {
    projectApi.patchUserPhoto(link)
      .then((resultUserInfo) => {
        setCurrentUser({
          name: resultUserInfo.user.name,
          about: resultUserInfo.user.about,
          avatar: resultUserInfo.user.avatar,
          _id: resultUserInfo.user._id
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlace(title, link) {
    projectApi.addNewCard(title, link)
      .then((newCard) => {
        setCards([newCard.card, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    setIsPopupWithImageOpen(true);
  }

  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      closeAllPopups();
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsPopupWithImageOpen(false);
    setIsInfoTooltipPopupOpen(false);
  }

  function handleLogin() {
    setLoggedIn(true)
  }

  function handleLogout() {
    projectApi.signOut()
      .then(() => {
        window.location.href = '/sign-in';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCredentialsFormPopup(isSuccess, message) {
    setIsInfoTooltipPopupOpen(true);
    setIsSuccess(isSuccess);
    setInfoMessage(message);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {isInitialized && (
        <div className="page">
          <Header isLoggedIn={loggedIn} currentUserEmail={currentUserEmail} handleLogout={handleLogout}/>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute redirectTo="/sign-up" loggedIn={loggedIn}>
                  <Main
                    onEditAvatar={handleEditAvatarClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onCardClick={handleCardClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                  />
                </ProtectedRoute>
              }
            />
            <Route path="/sign-up" element={<Register handleInfoTooltip={handleCredentialsFormPopup}/>}/>
            <Route path="/sign-in"
                   element={<Login handleLogin={handleLogin} handleInfoTooltip={handleCredentialsFormPopup}/>}/>
          </Routes>
          <Footer/>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            closeByOverlay={closeOverlay}
            onUpdateAvatar={handleUpdateAvatar}/>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            closeByOverlay={closeOverlay}
            onUpdateUser={handleUpdateUser}/>
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            closeByOverlay={closeOverlay}
            addCard={handleAddPlace}/>
          <ImagePopup
            card={selectedCard}
            isOpen={isPopupWithImageOpen}
            onClose={closeAllPopups}
            closeByOverlay={closeOverlay}/>
          <InfoTooltip
            isOpen={isInfoTooltipPopupOpen}
            isSuccess={isSuccess}
            onClose={closeAllPopups}
            closeByOverlay={closeOverlay}
            message={infoMessage}
          />
        </div>
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
