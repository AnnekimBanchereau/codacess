import {
  SET_SIGN_UP_FIELD_VALUE,
  SET_SIGN_UP_LOADING,
  SIGN_UP,
  SET_SIGN_UP_CONTROL_MESSAGE,
  VALIDATE_SIGN_UP_EMAIL,
  TEST_SIGN_UP_PASSWORD_STRENGTH,
  COMPARE_SIGN_UP_PASSWORD_CONFIRM,
} from 'src/actions/signup';

const initialState = {
  name: {
    value: '',
    controlMessage: '',
  },
  pseudo: {
    value: '',
    controlMessage: '',
  },
  email: {
    value: '',
    controlMessage: '',
  },
  password: {
    value: '',
    controlMessage: '',
  },
  passwordConfirm: {
    value: '',
    controlMessage: '',
  },
  loading: false,
  isSignedUp: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIGN_UP_CONTROL_MESSAGE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          controlMessage: action.message,
        },
      };
    case SIGN_UP:
      return {
        ...initialState,
        isSignedUp: true,
      };
    case SET_SIGN_UP_FIELD_VALUE:
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
        },
      };
    case SET_SIGN_UP_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case VALIDATE_SIGN_UP_EMAIL:
      return {
        ...state,
        email: {
          ...state.email,
          controlMessage: action.message,
        },
      };
    case TEST_SIGN_UP_PASSWORD_STRENGTH:
      return {
        ...state,
        password: {
          ...state.password,
          controlMessage: action.message,
        },
      };
    case COMPARE_SIGN_UP_PASSWORD_CONFIRM:
      return {
        ...state,
        passwordConfirm: {
          ...state.passwordConfirm,
          controlMessage: action.message,
        },
      };
    default:
      return state;
  }
};
