(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(13),c=n.n(s),o=n(5),r=(n(20),n(14)),u=n(3),l=n(2),p=n.p+"static/media/logo.bbe2a6ea.svg",d=n(0);function h(e){var t=e.headerEmail,n=e.signOut;return Object(d.jsxs)("div",{className:"header__info",children:[Object(d.jsx)("p",{className:"header__email",children:t}),Object(d.jsx)("p",{to:"/sign-in",className:"header__link link",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})}function j(){return Object(d.jsx)("div",{className:"header__sign",children:Object(d.jsx)(o.b,{to:"/sign-in",className:"header__link link",children:"\u0412\u043e\u0439\u0442\u0438"})})}function b(){return Object(d.jsx)("div",{className:"header__sign",children:Object(d.jsx)(o.b,{to:"/sign-up",className:"header__link  link",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})})}function m(e){var t=e.headerEmail,n=e.signOut,a=e.loggedIn;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{src:p,alt:"\u043b\u043e\u0433\u043e \u0441\u0430\u0439\u0442\u0430 '\u041c\u0435\u0441\u0442\u043e'",className:"header__logo"}),Object(d.jsxs)(l.d,{children:[a&&Object(d.jsx)(l.b,{exact:!0,path:"/",element:Object(d.jsx)(h,{headerEmail:t,signOut:n})}),Object(d.jsx)(l.b,{exact:!0,path:"/sign-up",element:Object(d.jsx)(j,{})}),Object(d.jsx)(l.b,{exact:!0,path:"/sign-in",element:Object(d.jsx)(b,{})})]})]})}var f=i.a.createContext();function O(e){var t=e.url,n=e.alt,i=e.title,s=e.likes,c=e.owner,o=e.id,r=e.onCardClick,u=e.onRemoveButtonClick,l=e.onCardLike,p=Object(a.useContext)(f),h=c===p._id,j="button element__remove-button ".concat(h?"element__remove-button_visible":"element__remove-button_hidden"),b=s.some((function(e){return e===p._id})),m="button element__like-button ".concat(b&&"element__like-button_active");return Object(d.jsxs)("article",{className:"element",children:[Object(d.jsx)("button",{type:"button",className:j,onClick:function(){u(o)}}),Object(d.jsx)("img",{src:t,alt:n,className:"element__image",onClick:function(){r(t,i)}}),Object(d.jsxs)("div",{className:"element__description",children:[Object(d.jsx)("h2",{className:"element__title",children:i}),Object(d.jsxs)("div",{className:"element__like-container",children:[Object(d.jsx)("button",{type:"button",className:m,onClick:function(){l(s,o)}}),Object(d.jsx)("p",{className:"element__like-counter",children:s.length})]})]})]})}function x(e){var t=e.onEditAvatar,n=e.onEditProfile,i=e.onAddPlace,s=e.onCardClick,c=e.onRemoveButtonClick,o=e.cards,r=e.onCardLike,u=Object(a.useContext)(f);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsx)("div",{className:"profile__image-container",onClick:t,children:Object(d.jsx)("img",{src:u.avatar,alt:"\u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043e\u0431\u043b\u0430\u0434\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__image"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__title",children:u.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button button",onClick:n}),Object(d.jsx)("p",{className:"profile__subtitle",children:u.about})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button button",onClick:i})]}),Object(d.jsx)("section",{className:"elements",children:o.map((function(e){return Object(d.jsx)(O,{url:e.link,alt:e.name,title:e.name,likes:e.likes,owner:e.owner,id:e._id,onCardClick:s,onRemoveButtonClick:c,onCardLike:r},e._id)}))})]})}function _(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2022 Mesto Russia"})})}var g=n(8),v=n(6);function C(){var e=i.a.useState({}),t=Object(u.a)(e,2),n=t[0],s=t[1],c=i.a.useState({}),o=Object(u.a)(c,2),r=o[0],l=o[1],p=i.a.useState(!1),d=Object(u.a)(p,2),h=d[0],j=d[1],b=Object(a.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s(e),l(t),j(n)}),[s,l,j]);return{values:n,handleChange:function(e){var t=e.target,a=t.value,i=t.name;s(Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},i,a))),l(Object(v.a)(Object(v.a)({},r),{},Object(g.a)({},i,t.validationMessage))),j(t.closest("form").checkValidity())},resetForm:b,errors:r,isValid:h}}function A(e){var t=e.handleSignIn,n=C(),a=n.values,i=n.handleChange,s=n.errors,c=n.isValid;return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h2",{className:"title login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{name:"login-form",className:"form login__form",onSubmit:function(e){e.preventDefault(),t(a)},noValidate:!0,children:[Object(d.jsx)("input",{name:"email",id:"email-input",type:"email",className:"form__input login__input input input_type_email",placeholder:"Email",value:a.email||"",onChange:i,minLength:"4",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"form__input-error email-input-error",children:s.email}),Object(d.jsx)("input",{name:"password",id:"password-input",type:"password",className:"form__input login__input input input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:a.password||"",onChange:i,minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"form__input-error password-input-error",children:s.password}),Object(d.jsx)("button",{type:"submit",disabled:!c,className:"login__submit-button form__submit ".concat(!c&&"popup__submit-button_inactive"),children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}function N(e){var t=e.handleSignUp,n=(e.currentPath,C()),a=n.values,i=n.handleChange,s=n.errors,c=n.isValid;return Object(d.jsxs)("div",{className:"register",children:[Object(d.jsx)("h2",{className:"title register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{name:"register-form",className:"form register__form",onSubmit:function(e){e.preventDefault(),t(a)},noValidate:!0,children:[Object(d.jsx)("input",{name:"email",id:"email-input",type:"email",className:"register__input form__input input input_type_email",placeholder:"Email",value:a.email||"",onChange:i,minLength:"4",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"form__input-error email-input-error",children:s.email}),Object(d.jsx)("input",{name:"password",id:"password-input",type:"password",className:"register__input form__input input input_type_password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:a.password||"",onChange:i,minLength:"2",maxLength:"40",required:!0}),Object(d.jsx)("span",{className:"form__input-error password-input-error",children:s.password}),Object(d.jsx)("button",{disabled:!c,type:"submit",className:"register__submit-button form__submit ".concat(!c&&"popup__submit-button_inactive"),children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(d.jsx)(o.b,{to:"/sign-in",className:"link register__tip",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}function k(e){var t=e.title,n=e.name,i=e.isOpen,s=e.onClose,c=e.buttonValue,o=e.children,r=e.onSubmit,u=e.isDisabled,l=void 0!==u&&u,p=Object(a.useRef)(null);return Object(a.useEffect)((function(){p.current.reset()}),[i]),Object(d.jsx)("div",{className:"popup popup_type_".concat(n," ").concat(i&&"popup_opened"),onClick:s,children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button button"}),Object(d.jsx)("h2",{className:"popup__title",children:t}),Object(d.jsxs)("form",{ref:p,name:n,className:"form",onSubmit:r,noValidate:!0,children:[o,Object(d.jsx)("button",{type:"submit",className:"popup__save-button popup__submit-button form__submit ".concat(l&&"popup__submit-button_inactive"),disabled:l,children:c})]})]})})}function y(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateAvatar,s=e.buttonText,c=C(),o=c.values,r=c.handleChange,u=c.resetForm,l=c.errors,p=c.isValid;return Object(a.useEffect)((function(){u({})}),[t,u]),Object(d.jsxs)(k,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:t,onClose:n,buttonValue:s,onSubmit:function(e){e.preventDefault(),i(o)},isDisabled:!p,children:[Object(d.jsx)("input",{name:"avatar",type:"url",className:"popup__input popup__input_type_avatar form__input",id:"avatar-input",placeholder:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",value:o.avatar||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"form__input-error avatar-input-error",children:l.avatar||""})]})}function S(e){var t=e.isOpen,n=e.onClose,i=e.onUpdateUser,s=e.buttonText,c=Object(a.useContext)(f),o=C(),r=o.values,u=o.handleChange,l=o.resetForm,p=o.errors,h=o.isValid;return Object(a.useEffect)((function(){c&&l(c,{},!0)}),[c,t,l]),Object(d.jsxs)(k,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit-profile",isOpen:t,onClose:n,buttonValue:s,onSubmit:function(e){e.preventDefault(),i(r)},isDisabled:!h,children:[Object(d.jsx)("input",{name:"name",type:"text",className:"popup__input popup__input_type_name form__input",id:"name-input",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:r.name||"",onChange:u}),Object(d.jsx)("span",{className:"form__input-error name-input-error",children:p.name||""}),Object(d.jsx)("input",{name:"about",type:"text",className:"popup__input popup__input_type_about form__input",id:"about-input",required:!0,minLength:"2",maxLength:"200",placeholder:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",value:r.about||"",onChange:u}),Object(d.jsx)("span",{className:"form__input-error about-input-error",children:p.about||""})]})}function V(e){var t=e.isOpen,n=e.onClose,i=e.onAddPlace,s=e.buttonText,c=C(),o=c.values,r=c.handleChange,u=c.resetForm,l=c.errors,p=c.isValid;return Object(a.useEffect)((function(){u()}),[t,u]),Object(d.jsxs)(k,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-place",isOpen:t,onClose:n,buttonValue:s,onSubmit:function(e){e.preventDefault(),i(o)},isDisabled:!p,children:[Object(d.jsx)("input",{name:"title",type:"text",className:"popup__input popup__input_type_title form__input",id:"title-input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:o.title||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"form__input-error title-input-error",children:l.title||""}),Object(d.jsx)("input",{name:"link",type:"url",className:"popup__input popup__input_type_link form__input",id:"link-input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:o.link||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"form__input-error link-input-error",children:l.link||""})]})}function E(e){var t=e.isOpen,n=e.onClose,a=e.onDelete,i=e.buttonText;return Object(d.jsx)(k,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-confirm",isOpen:t,onClose:n,buttonValue:i,onSubmit:function(e){e.preventDefault(),a()}})}function T(e){var t=e.url,n=e.title,a=e.onClose;return Object(d.jsx)("div",{className:"popup popup-image ".concat(n&&"popup_opened"),onClick:a,children:Object(d.jsxs)("div",{className:"popup__container popup-image__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button popup-image__close-button button"}),Object(d.jsxs)("figure",{className:"popup-image__figure",children:[Object(d.jsx)("img",{className:"popup-image__image",src:t,alt:n}),Object(d.jsx)("figcaption",{className:"popup-image__caption",children:n})]})]})})}var R=n(10),P=n(11),w=new(function(){function e(t){var n=t.url,a=t.headers;Object(R.a)(this,e),this.checkResult=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},this._url=n,this._headers=a}return Object(P.a)(e,[{key:"getUserInfo",value:function(){return fetch(this._url+"/users/me",{headers:this._headers,credentials:"include"}).then(this.checkResult)}},{key:"getInitialCards",value:function(){return fetch(this._url+"/cards",{headers:this._headers,credentials:"include"}).then(this.checkResult)}},{key:"editProfile",value:function(e,t){return fetch(this._url+"/users/me",{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:e,about:t})}).then(this.checkResult)}},{key:"addCard",value:function(e,t){return console.log(e,t),fetch(this._url+"/cards",{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:e,link:t})}).then(this.checkResult)}},{key:"deleteCard",value:function(e){return fetch(this._url+"/cards/"+e,{method:"DELETE",headers:this._headers,credentials:"include"}).then(this.checkResult)}},{key:"addLike",value:function(e){return fetch(this._url+"/cards/"+e+"/likes",{method:"PUT",headers:this._headers,credentials:"include"}).then(this.checkResult)}},{key:"removeLike",value:function(e){return fetch(this._url+"/cards/"+e+"/likes",{method:"DELETE",headers:this._headers,credentials:"include"}).then(this.checkResult)}},{key:"editAvatar",value:function(e){return fetch(this._url+"/users/me/avatar",{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({avatar:e})}).then(this.checkResult)}}]),e}())({url:"https://api.domainnames.students.nomoredomains.rocks",headers:{Accept:"application/json","Content-Type":"application/json"}}),L=n(15),W=["component"];function F(e){var t=e.component,n=Object(L.a)(e,W);return n.loggedIn?Object(d.jsx)(t,Object(v.a)({},n)):Object(d.jsx)(l.a,{to:"/sign-in"})}function H(e){var t=e.popupType,n=e.popupInfoImage,a=e.popupInfoTitle,i=e.isOpen,s=e.onClose;return Object(d.jsx)("div",{className:"popup popup-info popup-info__".concat(t," ").concat(i&&"popup_opened"),onClick:s,children:Object(d.jsxs)("div",{className:"popup__container popup-info__container",children:[Object(d.jsx)("button",{type:"button",className:"popup__close-button button"}),Object(d.jsx)("img",{src:n,alt:"\u0438\u043a\u043e\u043d\u043a\u0430 \u0434\u043b\u044f \u043f\u043e\u043f\u0430\u043f\u0430",className:"popup-info__image"}),Object(d.jsx)("h2",{className:"popup-info__title",children:a})]})})}function I(e){var t=e.isOpen,n=e.onClose;return Object(d.jsx)(H,{popupType:"success",popupInfoImage:"data:image/png;base64,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",popupInfoTitle:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!",isOpen:t,onClose:n})}function U(e){var t=e.isOpen,n=e.onClose;return Object(d.jsx)(H,{popupType:"fail",popupInfoImage:"data:image/png;base64,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",popupInfoTitle:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435\xa0\u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437!",isOpen:t,onClose:n})}var X=new(function(){function e(t){var n=this,a=t.url,i=t.headers;Object(R.a)(this,e),this.signOut=function(){return fetch("".concat(n._url,"/signout"),{method:"DELETE",credentials:"include"}).then((function(e){n._getResponseData(e)}))},this._url=a,this._headers=i}return Object(P.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"authorise",value:function(e,t){var n=this;return fetch("".concat(this._url,"/signin"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"register",value:function(e,t){var n=this;return fetch("".concat(this._url,"/signup"),{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({email:e,password:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"getContent",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(t){return e._getResponseData(t)}))}}]),e}())({url:"https://api.domainnames.students.nomoredomains.rocks",headers:{Accept:"application/json","Content-Type":"application/json"}}),B=n(4);var K=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(!1),c=Object(u.a)(s,2),o=c[0],p=c[1],h=Object(a.useState)(!1),j=Object(u.a)(h,2),b=j[0],O=j[1],g=Object(a.useState)(!1),v=Object(u.a)(g,2),C=v[0],k=v[1],R=Object(a.useState)(!1),P=Object(u.a)(R,2),L=P[0],W=P[1],H=Object(a.useState)(!1),K=Object(u.a)(H,2),q=K[0],Z=K[1],G=Object(a.useState)([]),D=Object(u.a)(G,2),Q=D[0],J=D[1],z=Object(a.useState)({}),Y=Object(u.a)(z,2),M=Y[0],$=Y[1],ee=Object(a.useState)({}),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ie=Object(a.useState)(""),se=Object(u.a)(ie,2),ce=se[0],oe=se[1],re=Object(a.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),ue=Object(u.a)(re,2),le=ue[0],pe=ue[1],de=Object(a.useState)("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),he=Object(u.a)(de,2),je=he[0],be=he[1],me=Object(a.useState)("\u0421\u043e\u0437\u0434\u0430\u0442\u044c"),fe=Object(u.a)(me,2),Oe=fe[0],xe=fe[1],_e=Object(a.useState)("\u0414\u0430"),ge=Object(u.a)(_e,2),ve=ge[0],Ce=ge[1],Ae=Object(a.useState)(!1),Ne=Object(u.a)(Ae,2),ke=Ne[0],ye=Ne[1],Se=Object(a.useState)(""),Ve=Object(u.a)(Se,2),Ee=Ve[0],Te=Ve[1],Re=Object(B.b)(),Pe=Object(a.useState)(Re.location.pathname),we=Object(u.a)(Pe,2),Le=we[0],We=we[1],Fe=Object(l.g)(),He=function(){i(!1),p(!1),O(!1),k(!1),W(!1),Z(!1),$({})},Ie=function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&He()},Ue=function(){Ce("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435..."),w.deleteCard(ce).then((function(){J((function(e){return e.filter((function(e){return e._id!==ce}))}))})).then((function(){He()})).catch((function(e){return console.log(e),[]})).finally((function(){return Ce("\u0414\u0430")}))};Object(a.useEffect)((function(){if(ke){var e=[w.getUserInfo(),w.getInitialCards()];Promise.all(e).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];ae(n),J(a)})).catch((function(e){return console.log("".concat(e," \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"))}))}}),[ke]);var Xe=Object(a.useCallback)((function(){X.getContent().then((function(e){e?(ye(!0),Te(e.email),Fe("/")):W(!0)})).catch((function(e){return console.log("".concat(e," \u043f\u0440\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0435 \u0442\u043e\u043a\u0435\u043d\u0430"))}))}),[Fe]);return Object(a.useEffect)((function(){Xe()}),[Xe]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&He()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){var e=Re.location.pathname;We(e)}),[Re.location]),Object(d.jsxs)(f.Provider,{value:ne,children:[Object(d.jsx)(m,{headerEmail:Ee,signOut:function(){X.signOut().then((function(){ye(!1),Te(""),Fe("/")})).catch((function(e){return console.log("".concat(e," \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0438\u0437 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"))}))},loggedIn:ke}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{exact:!0,path:"/sign-in",element:Object(d.jsx)(A,{handleSignIn:function(e){var t=e.email,n=e.password;X.authorise(t,n).then((function(e){ye(!0),Te(t),ae(e),Fe("/")})).catch((function(e){console.log("".concat(e," \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438")),W(!0)}))},currentPath:Le})}),Object(d.jsx)(l.b,{exact:!0,path:"/sign-up",element:Object(d.jsx)(N,{handleSignUp:function(e){var t=e.email,n=e.password;X.register(t,n).then((function(e){400!==e.statusCode&&(Z(!0),Fe("/sign-in"))})).catch((function(e){return console.log(e),W(!0),[]}))},currentPath:Le})}),Object(d.jsx)(l.b,{exact:!0,path:"/",element:Object(d.jsx)(F,{loggedIn:ke,component:x,onEditAvatar:function(){i(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){O(!0)},onCardClick:function(e,t){$({url:e,title:t})},onRemoveButtonClick:function(e){oe(e),k(!0)},cards:Q,onCardLike:function(e,t){e.some((function(e){return e===ne._id}))?w.removeLike(t).then((function(e){J((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e),[]})):w.addLike(t).then((function(e){J((function(n){return n.map((function(n){return n._id===t?e:n}))}))})).catch((function(e){return console.log(e),[]}))},onCardDelete:Ue})}),Object(d.jsx)(l.b,{path:"*",element:ke?Object(d.jsx)(l.a,{to:"/"}):Object(d.jsx)(l.a,{to:"/sign-in"})})]}),Object(d.jsx)(_,{}),Object(d.jsx)(y,{isOpen:n,onClose:Ie,onUpdateAvatar:function(e){var t=e.avatar;pe("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),w.editAvatar(t).then((function(e){return ae(e)})).then((function(){He()})).catch((function(e){return console.log(e),[]})).finally((function(){return pe("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")}))},buttonText:le}),Object(d.jsx)(S,{isOpen:o,onClose:Ie,onUpdateUser:function(e){var t=e.name,n=e.about;be("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),w.editProfile(t,n).then((function(e){return ae(e)})).then((function(){He(),be("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})).catch((function(e){return console.log(e),[]}))},buttonText:je}),Object(d.jsx)(V,{isOpen:b,onClose:Ie,onAddPlace:function(e){var t=e.title,n=e.link;xe("\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435..."),w.addCard(t,n).then((function(e){return J([e].concat(Object(r.a)(Q)))})).then((function(){He()})).catch((function(e){return console.log(e),[]})).finally((function(){return xe("\u0421\u043e\u0437\u0434\u0430\u0442\u044c")}))},buttonText:Oe}),Object(d.jsx)(T,{onClose:Ie,url:M.url,title:M.title}),Object(d.jsx)(E,{isOpen:C,onClose:Ie,onDelete:Ue,buttonText:ve}),Object(d.jsx)(I,{isOpen:q,onClose:Ie}),Object(d.jsx)(U,{isOpen:L,onClose:Ie})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(K,{})})}),document.getElementById("root")),q()}},[[22,1,2]]]);
//# sourceMappingURL=main.5c7caa7e.chunk.js.map