import React from 'react';

const useOnClickOutsideEffect = (
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: MouseEvent) => void
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

export { useOnClickOutsideEffect };
