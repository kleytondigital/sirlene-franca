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
    <div className="flex gap-4 justify-center items-center text-white">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.days)}
        </div>
        <div className="text-sm uppercase tracking-wider">Dias</div>
      </div>
      <div className="text-3xl md:text-5xl text-golden">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.hours)}
        </div>
        <div className="text-sm uppercase tracking-wider">Horas</div>
      </div>
      <div className="text-3xl md:text-5xl text-golden">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.minutes)}
        </div>
        <div className="text-sm uppercase tracking-wider">Min</div>
      </div>
      <div className="text-3xl md:text-5xl text-golden">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold font-serif text-golden">
          {formatNumber(timeLeft.seconds)}
        </div>
        <div className="text-sm uppercase tracking-wider">Seg</div>
      </div>
    </div>
  );
};

export default CountdownTimer;