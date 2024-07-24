import React, { useEffect, useState, useRef } from 'react';
import classes from './style.module.scss';

let interval: any = null;
const Toast = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) => {
  /** Required state  and refs*/
  const modalRef = useRef<HTMLInputElement>(null);
  const [timer, setTimer] = useState<number>(0);
  const [showtoast, setShowToast] = useState(false);

  /** Effect to start timer when message is their */
  useEffect(() => {
    if (showtoast) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [showtoast]);

  /** Effect to show toast when message is available */
  useEffect(() => {
    if (message && typeof message === 'string' && message.length > 0) {
      setShowToast(true);
      setTimer(0);
    }
  }, [message]);

  /** Effect to remove toast when timer is 3 second */
  useEffect(() => {
    if (timer > 3) {
      const modal = modalRef.current;
      if (modal) {
        modal.setAttribute('closing', 'true');
        modal.addEventListener(
          'animationend',
          () => {
            modal.removeAttribute('closing');
            setShowToast(false);
            setMessage('');
            setTimer(0);
          },
          { once: true }
        );
      }
    }
  }, [timer]);

  return (
    <>
      {showtoast && (
        <div className={classes.container} ref={modalRef}>
          <div>{message}</div>
        </div>
      )}
    </>
  );
};

export default Toast;
