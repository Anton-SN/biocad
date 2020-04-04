const initialState = {
  language: 'RUS',
};

const setLanguage = (state, payload) => ({ ...state, ...payload });

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LANGUAGE':
      return setLanguage(state, payload);
    default:
      return state;
  }
};
