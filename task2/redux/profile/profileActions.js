import {
  FIRST_NAME_CHANGE,
  LAST_NAME_CHANGE,
  MOBILE_NUMBER_CHANGE,
  EMAIL_CHANGE,
} from './profileTypes';

export const handleFirstName = (firstName) => {
  return {
    type: FIRST_NAME_CHANGE,
    payload: firstName,
  };
};

export const handleLastName = (lasName) => {
  return {
    type: LAST_NAME_CHANGE,
    payload: lasName,
  };
};

export const handleMobileNumber = (mobileNo) => {
  return {
    type: MOBILE_NUMBER_CHANGE,
    payload: mobileNo,
  };
};

export const handleEmail= (email) => {
  return {
    type: EMAIL_CHANGE,
    payload: email,
  };
};
