import { useEffect, useState } from "react";

function useDebounce(value) {
  const [debouncedValue, setdebounceVal] = useState(value);

  //딜레이 1초
  useEffect(() => {
    const timer = setTimeout(() => {
      setdebounceVal(value);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
