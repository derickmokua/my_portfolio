import { useState, useEffect } from 'react';

const useTypewriter = ({ lines = [], typingSpeed = 60, pause = 1200, loop = true }) => {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!lines.length) return;
    let timeout;
    const currentLine = lines[index % lines.length];
    const delta = isDeleting ? typingSpeed / 2 : typingSpeed;

    timeout = setTimeout(() => {
      const next = isDeleting ? currentLine.slice(0, display.length - 1) : currentLine.slice(0, display.length + 1);
      setDisplay(next);
      if (!isDeleting && next === currentLine) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && next === '') {
        setIsDeleting(false);
        setIndex(i => i + 1);
      }
    }, delta);

    return () => clearTimeout(timeout);
  }, [display, isDeleting, index, lines, typingSpeed, pause, loop]);

  return display;
};

export default useTypewriter;