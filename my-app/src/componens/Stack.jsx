import React, { useRef, useEffect } from 'react';

const techs = [
  'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 
  'PostgreSQL', 'Git', 'Postman', 'Tailwind', 'Material-UI', 
  'HTML', 'CSS', 'Redux'
];

const Stack = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const clone = container.innerHTML;
    container.innerHTML += clone; // дублируем контент для эффекта бесконечности
  }, []);

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content" ref={containerRef}>
        {techs.map((tech, i) => (
          <span className="tech-pill" key={i}>{tech}</span>
        ))}
      </div>
    </div>
  );
};

export default Stack;
