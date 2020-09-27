import React, { useSate, useEffect } from 'react';

const Convert = ({ language, text }) => {

  useEffect(() => {
    console.log('new lang or text');
  }, [language, text]);

  return <div>Convert</div>
}

export default Convert;