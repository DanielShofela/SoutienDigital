import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 150,
  deleteSpeed = 100,
  delaySpeed = 2000,
}: TypewriterProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];

      if (isDeleting) {
        // Logic for deleting text
        setText(currentWord.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setWordIndex(prevIndex => prevIndex + 1);
        }
      } else {
        // Logic for typing text
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          // Pause after typing is complete, then start deleting
          setTimeout(() => setIsDeleting(true), delaySpeed);
        }
      }
    };

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  return text;
};
