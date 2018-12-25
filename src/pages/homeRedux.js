import { push } from 'react-router-redux';

const initState = {
  info: {
    name: 'ahiba',
    sex: 'male',
  },
  language: 'zh',
};

const LOAD_INFO = 'sass-platform/home/LOAD_INFO';
const CHANGE_LAN = 'sass-platform/home/CHANGE_LAN';

export const loadInfo = () => (dispatch, getState) => {
  const info = {
      name: 'shine',
      sex: 'male',
  };
  dispatch({
      type: LOAD_INFO,
      info,
  });
};

export const changeLan = () => (dispatch, getState) => {
  const { my } = getState();
  let { language } = my;
  console.log('当前的my language', my, language);
  if (language === 'zh') {
    language = 'en';
  } else {
    language = 'zh';
  }
  dispatch({
    type: CHANGE_LAN,
    language,
  });
};

export const link = () => (dispatch, getState) => {
  console.log('触发了link');
  dispatch(push('/login'));  
};

export default function my(state = initState, action) {
  const { type, info, language } = action;
  switch (type) {
      case LOAD_INFO:
          return { ...state, info };
      case CHANGE_LAN:
          return { ...state, language };
      default:
          return state;
  }
}
