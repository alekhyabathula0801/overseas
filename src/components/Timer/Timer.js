import { useEffect, useMemo, useRef, useState } from "react";
import "./Timer.scss";

const TIMER_ACTION_MAPPER = {
  PAUSE: "PAUSE",
  STOP: "STOP",
  START: "START",
};

const TIMER_ACTIONS_CLASSNAME = {
  [TIMER_ACTION_MAPPER.PAUSE]: "timer-pause",
  [TIMER_ACTION_MAPPER.STOP]: "timer-stop",
  [TIMER_ACTION_MAPPER.START]: "timer-start",
};

const LOCAL_STORAGE_KEY = "timer value";

export const Timer = () => {
  const timerRef = useRef({});
  const [initialValue, setInitialValue] = useState(5);
  const [timer, setTimer] = useState(300);
  const [timeIntervalValue, setTimeIntervalValue] = useState(null);
  const [timerAction, setTimerAction] = useState("");

  useEffect(() => {
    const localTimerValue = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localTimerValue && !timerRef.current.mounted) {
      onTimeChange(Number(localTimerValue));
    }
    timerRef.current.mounted = true;
    return () => {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, timerRef.current.value);
      clearInterval(timeIntervalValue);
    };
  }, []);

  const onInputChange = (event) => {
    const value = event.target.value;
    const time = Number(value) || "";
    if (!isNaN(time)) {
      setInitialValue(time);
    }
  };

  const getTimeInMinutesAndSeconds = () => {
    timerRef.current.value = timer;
    const minutes = parseInt(timer / 60, 10);
    const seconds = parseInt(timer % 60, 10);
    return {
      minutes,
      seconds,
    };
  };

  const { minutes, seconds } = useMemo(
    () => getTimeInMinutesAndSeconds(),
    [timer]
  );

  const onStart = () => {
    onTimeChange(initialValue * 60);
  };

  const onTimeChange = (value) => {
    if (timeIntervalValue) {
      clearInterval(timeIntervalValue);
    }
    setTimerAction(TIMER_ACTION_MAPPER.START);
    if (value <= 0) {
      setTimer(0);
      return;
    }
    setTimer(value);

    const timeInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 0) {
          clearInterval(timeInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setTimeIntervalValue(timeInterval);
  };

  const onStop = () => {
    setTimerAction(TIMER_ACTION_MAPPER.STOP);
    clearInterval(timeIntervalValue);
    setTimer(0);
  };

  const onPause = () => {
    setTimerAction(TIMER_ACTION_MAPPER.PAUSE);
    clearInterval(timeIntervalValue);
  };

  const onRestart = () => {
    onTimeChange(timer);
  };

  return (
    <div className="oe-timer flex-center flex-column">
      <h1>Timer</h1>
      <input
        value={initialValue}
        onChange={onInputChange}
        className="oe-t-input"
        placeholder="Enter value in minutes"
      />
      <button onClick={onStart}>Start</button>
      <p className={`timer ${TIMER_ACTIONS_CLASSNAME[timerAction]}  `}>
        {minutes} : {seconds}
      </p>
      <button onClick={onPause}>PAUSE</button>
      <button onClick={onRestart}>Restart</button>
      <button onClick={onStop}>STOP</button>
    </div>
  );
};

export default Timer;
