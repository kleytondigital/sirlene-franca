
import { useState, useEffect } from 'react';

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = () => {
  const targetDate = new Date('2025-08-25T10:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({});
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number | undefined) => {
    return num !== undefined ? String(num).padStart(2, '0') : '00';
  };

  return (
    <div className="flex gap-2 md:gap-3 justify-center items-center text-white">
      <div className="text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-xs uppercase tracking-wider">Dias</div>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl text-golden">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-xs uppercase tracking-wider">Horas</div>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl text-golden">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-xs uppercase tracking-wider">Min</div>
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl text-golden">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-xs uppercase tracking-wider">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
