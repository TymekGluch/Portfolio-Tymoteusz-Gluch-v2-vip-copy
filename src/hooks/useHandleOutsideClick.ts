import React from 'react';

const useHandleOutsideClick = (
  refsArray: React.RefObject<HTMLElement>[],
  handler: (event: MouseEvent) => void
) => {
  React.useEffect(() => {
    const listener = (event: MouseEvent): void => {
      let shouldReturn = false

      refsArray.map((ref) => {
        if (!ref.current || ref.current.contains(event.target as Node)) {
          shouldReturn = true
        }
      })

      if (shouldReturn) {
        console.log('shouldreturn')

        return
      }

      console.log('callback')

      handler(event);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [refsArray, handler]);
};

export { useHandleOutsideClick };
