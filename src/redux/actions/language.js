const setLanguage = language =>
  // console.log({language})
  ({
    type: 'SET_LANGUAGE',
    payload: { language },
  });

export default setLanguage;
