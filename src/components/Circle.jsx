import { useEffect }  from 'react'
import './circle.css'

const Circle = () => {
    useEffect(() => {
        const color = ['red', 'green', 'blue', 'yellow', 'orange'];
    
        const animateCircle = (event) => {
          const circle = document.createElement('div');
          circle.setAttribute('class', 'circle');
          document.body.appendChild(circle);
    
          circle.style.left = event.clientX + 'px';
          circle.style.top = event.clientY + 'px';
          circle.style.transition = 'all 0.5s linear 0s';
    
          const randomIndex = Math.floor(Math.random() * 5);
          const randomColor = color[randomIndex];
          circle.style.borderColor = randomColor;
    
          setTimeout(() => {
            circle.style.left = circle.offsetLeft + 10 + 'px';
            circle.style.top = circle.offsetTop + 10 + 'px';
            circle.style.opacity = 0;
          }, 0);
        };
    
        document.onmousemove = animateCircle;
    
        return () => {
          document.onmousemove = null;
        };
      }, []);
    
      return null; // No visible component as the circles are appended directly to the body
    };


export default Circle
