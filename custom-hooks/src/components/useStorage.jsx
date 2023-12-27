import { useState, useEffect } from 'react';

const useStorage = (key, initialValue = '') => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, [key]);

  return [value, updateValue];
};

export default useStorage;
