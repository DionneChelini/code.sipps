import { useState, useEffect } from 'react';

const useSpinnerHook = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      return () => clearTimeout;
    }, 900);
  }, [loading]);

  return [loading, setLoading];
};

export default useSpinnerHook;
