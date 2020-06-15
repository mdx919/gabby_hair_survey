import {
  UPDATE_NAME,
  UPDATE_EMAIL,
  UPDATE_ANS_1,
  UPDATE_ANS_2,
  UPDATE_ANS_3,
  UPDATE_ANS_4,
  UPDATE_ANS_5,
  UPDATE_ANS_6,
  UPDATE_ANS_7,
  UPDATE_ANS_8,
} from './actionType';

export const updateName = (name) => {
  return { type: UPDATE_NAME, payload: name };
};

export const updateEmail = (email) => {
  return { type: UPDATE_EMAIL, payload: email };
};

export const updateAnsOne = (ansOne) => {
  return { type: UPDATE_ANS_1, payload: ansOne };
};

export const updateAnsTwo = (ansTwo) => {
  return { type: UPDATE_ANS_2, payload: ansTwo };
};

export const updateAnsThree = (ansThree) => {
  return { type: UPDATE_ANS_3, payload: ansThree };
};

export const updateAnsFour = (ansFour) => {
  return { type: UPDATE_ANS_4, payload: ansFour };
};

export const updateAnsFive = (ansFive) => {
  return { type: UPDATE_ANS_5, payload: ansFive };
};

export const updateAnsSix = (ansSix) => {
  return { type: UPDATE_ANS_6, payload: ansSix };
};

export const updateAnsSeven = (ansSeven) => {
  return { type: UPDATE_ANS_7, payload: ansSeven };
};

export const updateAnsEight = (ansEight) => {
  return { type: UPDATE_ANS_8, payload: ansEight };
};
