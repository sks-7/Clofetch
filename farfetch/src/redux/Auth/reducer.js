import * as types from './actionType';
const initialState = {
  SignUp: [],
  Login: JSON.parse(localStorage.getItem('user')) || [],
  sucess: false,
  isLoading: false,
  isLError: false,
  isLMError: [],
  isSError: false,
  isSMError: [],
  failure: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_SIGNUP_SUCCESS:
      return {
        ...state,
        SignUp: payload,
        isSError: false,
        failure: true,
      };

    case types.GET_SIGNUP_FAILURE:
      return {
        ...state,
        isSError: true,
        isSMError: payload,
        SignUp: [],
        failure: false,
      };

    case types.GET_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(payload.user.uid));
      return {
        ...state,
        Login: payload.user.uid,
        isLError: false,
        sucess: true,
      };

    case types.GET_LOGIN_FAILURE:
      return {
        ...state,
        isLError: true,
        isLMError: payload,
        Login: [],
        sucess: false,
      };

    // case AUTH_LOGOUT: {
    //   localStorage.removeItem('token');

    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //     token: '',
    //     name: '',
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default reducer;
