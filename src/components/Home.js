import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/Greetings/greetings';

export default function Home() {
  const message = useSelector((state) => state.reducerMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return (
    <div>
      {message.title}
    </div>
  );
}
