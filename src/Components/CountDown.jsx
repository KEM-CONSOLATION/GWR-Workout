import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = calculateTargetDate();

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const calculateTargetDate = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setHours(0, 0, 0, 0);
    return targetDate;
  };

  return (
    <div className="flex items-center gap-5 text-white">
      <div className="flex flex-col items-center">
        <p className="text-[14px] lg:text-[60px] font-Orbitron font-[400]">
          {countdown.days}
        </p>
        <p>Days</p>
      </div>
      <p>:</p>
      <div className="flex flex-col items-center">
        <p className="text-[14px] lg:text-[60px] font-Orbitron font-[400]">
          {countdown.hours}
        </p>
        <p>Hours</p>
      </div>
      <p>:</p>

      <div className="flex flex-col items-center">
        <p className="text-[14px] lg:text-[60px] font-Orbitron font-[400]">
          {countdown.minutes}
        </p>
        <p>Minutes</p>
      </div>
      <p>:</p>

      <div className="flex flex-col items-center">
        <p className="text-[14px] lg:text-[60px] font-Orbitron font-[400]">
          {countdown.seconds}
        </p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Countdown;
