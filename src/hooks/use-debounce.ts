export function useDebounce<A extends any[]>(
  cb: (...args: A) => void,
  timeoutMS: number = 0,
): (...args: A) => void {
  let timer: number;

  return function (...args: A): void {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
      timer = 0;
    }, timeoutMS);
  };
}
