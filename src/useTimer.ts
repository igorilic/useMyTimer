import { useState, useEffect } from 'react';

const useMyTimer = (currentDate: Date): Date => {
  const [state, setState] = useState<Date>(currentDate);
  const tick = () => setState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  });
  return state;
};

export default useMyTimer;
