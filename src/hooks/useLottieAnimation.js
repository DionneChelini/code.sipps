import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import lottie from 'lottie-web';

const useLottieAnimation = () => {
  const { lesson } = useSelector((state) => state);
  const animation = useRef(null);

  useEffect(() => {
    // Don't run unless the isCompleted property actually exists
    if (lesson.hasOwnProperty('isCompleted')) {
      lottie.loadAnimation({
        container: animation.current,
        renderer: 'svg',
        loop: lesson.isCompleted === true && 0,
        autoplay: true,
        animationData: require('../svgs/confetti-2.json'),
      });
    }
  }, [lesson]);

  return animation;
};

export default useLottieAnimation;
