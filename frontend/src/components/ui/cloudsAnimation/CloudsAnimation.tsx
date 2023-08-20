import { useEffect } from 'react';
import { TweenMax, Power0 } from 'gsap';
import './CloudsNimation.css';

function CloudsAnimation() {
  useEffect(() => {
    const cloudContainer:HTMLElement | null = document.getElementById('cloudContainer');
    if (!cloudContainer) return;

    let speed = 50;
    const delay:number = 0;
    let leftPosition = -100;

    function shuffle<T>(array: T[]): T[] {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    function animation() {
      const clouds = ['cloud-0', 'cloud-1', 'cloud-2'];
      shuffle(clouds);

      for (let i = 0; i < 3; i++) {
        if (i === 0) {
          speed = 70;
        } else if (i === 1) {
          speed = 60;
        }

        const cloud = document.createElement('div');
        cloud.className = `cloud ${clouds[i]}`;
        cloudContainer!.appendChild(cloud);

        if (i === 2) {
          TweenMax.fromTo(
            cloud,
            speed,
            { left: leftPosition + i * 400, top: i * 60 },
            {
              left: '100%',
              ease: Power0.easeNone,
              delay,
              onComplete: onCompleteHandler,
            }
          );
        } else {
          TweenMax.fromTo(
            cloud,
            speed,
            { left: leftPosition + i * 400, top: i * 60 },
            { left: '100%', ease: Power0.easeNone, delay }
          );
        }
      }
    }

    function onCompleteHandler() {
      const cloudElements = document.querySelectorAll('.cloud');
      cloudElements.forEach((cloud) => cloud.remove());

      leftPosition = -1000;
      animation();
    }

    animation();
  }, []);

  return <div id="cloudContainer"></div>;
}

export default CloudsAnimation;
