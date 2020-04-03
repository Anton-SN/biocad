import rus from './rus.json';
import eng from './eng.json';

const getLang = lang => {
  switch (lang) {
    case 'rus':
      return rus;
    case 'eng':
      return eng;
    default:
      return rus;
  }
};

const t = (text, lang) =>
  text.split('.').reduce((acc, value) => {
    if (acc && typeof acc[value] !== 'undefined') {
      return acc[value];
    }
    return '-';
  }, getLang(lang));

export default t;
