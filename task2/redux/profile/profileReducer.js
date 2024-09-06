import {
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  MOBILE_NUMBER_CHANGE,
  EMAIL_CHANGE,
} from './profileTypes';

const initialState = {
  firstName: '',
  lastName: '',
  mobileNo: '',
  email: '',
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME_CHANGE:
      return {
        ...state,
        firstName: action.payload,
      };
    case LAST_NAME_CHANGE:
      return {
        ...state,
        lastName: action.payload,
      };
    case MOBILE_NUMBER_CHANGE:
      return {
        ...state,
        mobileNo: action.payload,
      };
    case EMAIL_CHANGE:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
}
