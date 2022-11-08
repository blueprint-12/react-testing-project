import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setdebounceVal] = useState(value);

  //딜레이 1초
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounceVal(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
