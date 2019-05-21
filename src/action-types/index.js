import navBarActionTypes from './navBarActionTypes';
import auth from './authActionTypes';
import article from './article.action-type';
import modalTypes from './modalTypes';
import notificationActionTypes from './notificationActionTypes';
import articleActionTypes from './articleActionTypes';
import createArticleActionTypes from './articles.action-type';
import resetPasswordActionTypes from './resetPasswordActionTypes';
import profileActionTypes from './profileActionTypes';
import emailShareModalTypes from './emailShareModalTypes';

const {
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  GET_USER_DATA_FAIL,
  GET_USER_DATA,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} = auth;
const { GET_SINGLE_ARTICLE, ARTICLE_NOT_FOUND } = article;
const {
  OPEN_MODAL, CLOSE_MODAL, OPEN_TAGS_MODAL, CLOSE_TAGS_MODAL, OPEN_SIGNUP_MODAL, CLOSE_SIGNUP_MODAL
} = modalTypes;
const { SHOW_SIDEDRAWER, HIDE_SIDEDRAWER } = navBarActionTypes;
const { GET_ARTICLES_BEGIN, GET_ARTICLES_FAIL, GET_ARTICLES_SUCCESS } = articleActionTypes;
const { GET_NOTIFICATION, LOADING_NOTIFICATION } = notificationActionTypes;
const {
  CLOSE_FORGOT_MODAL,
  OPEN_FORGOT_MODAL,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  GET_RESET_TOKEN,
  OPEN_RESET_MODAL,
  CLOSE_RESET_MODAL
} = resetPasswordActionTypes;
const { GET_PROFILE, PROFILE_LOADING, UPDATE_PROFILE } = profileActionTypes;
const {
  OPEN_EMAIL_SHARE_MODAL,
  CLOSE_EMAIL_SHARE_MODAL,
  EMAIL_SHARE_BEGINS,
  EMAIL_SHARE_SUCCESS,
  EMAIL_SHARE_FAIL
} = emailShareModalTypes;

export {
  SHOW_SIDEDRAWER,
  HIDE_SIDEDRAWER,
  GET_SINGLE_ARTICLE,
  ARTICLE_NOT_FOUND,
  GET_NOTIFICATION,
  LOADING_NOTIFICATION,
  LOGIN_USER_BEGIN,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  OPEN_MODAL,
  CLOSE_MODAL,
  GET_ARTICLES_BEGIN,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_SUCCESS,
  OPEN_TAGS_MODAL,
  CLOSE_TAGS_MODAL,
  createArticleActionTypes,
  GET_USER_DATA,
  GET_USER_DATA_FAIL,
  OPEN_SIGNUP_MODAL,
  CLOSE_SIGNUP_MODAL,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  CLOSE_FORGOT_MODAL,
  OPEN_FORGOT_MODAL,
  FORGOT_PASSWORD_BEGIN,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_BEGIN,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
  GET_RESET_TOKEN,
  OPEN_RESET_MODAL,
  CLOSE_RESET_MODAL,
  auth,
  navBarActionTypes,
  modalTypes,
  GET_PROFILE,
  PROFILE_LOADING,
  UPDATE_PROFILE,
  OPEN_EMAIL_SHARE_MODAL,
  CLOSE_EMAIL_SHARE_MODAL,
  EMAIL_SHARE_BEGINS,
  EMAIL_SHARE_SUCCESS,
  EMAIL_SHARE_FAIL
};
