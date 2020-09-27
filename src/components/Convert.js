import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
  /* init state */
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    /* helper function */
    const doTranslation = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();

  }, [language, text]);

  return (
    <h1 className="ui header">{translated}</h1>
  );
};

export default Convert;
