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
} from '../actionType';

const INITIAL_STATE = {
  savedName: '',
  savedEmail: '',
  savedAns1: '',
  savedAns2: '',
  savedAns3: '',
  savedAns4: '',
  savedAns5: '',
  savedAns6: '',
  savedAns7: '',
  savedAns8: '',
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, savedName: action.payload };
    case UPDATE_EMAIL:
      return { ...state, savedEmail: action.payload };
    case UPDATE_ANS_1:
      return { ...state, savedAns1: action.payload };
    case UPDATE_ANS_2:
      return { ...state, savedAns2: action.payload };
    case UPDATE_ANS_3:
      return { ...state, savedAns3: action.payload };
    case UPDATE_ANS_4:
      return { ...state, savedAns4: action.payload };
    case UPDATE_ANS_5:
      return { ...state, savedAns5: action.payload };
    case UPDATE_ANS_6:
      return { ...state, savedAns6: action.payload };
    case UPDATE_ANS_7:
      return { ...state, savedAns7: action.payload };
    case UPDATE_ANS_8:
      return { ...state, savedAns8: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
