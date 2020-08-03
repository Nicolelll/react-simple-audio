export const formatTime = s => {
  const hours = Math.floor(s / (60 * 60));

  const minutes = Math.floor((s - hours * 3600) / 60);
  const second = s - (hours * 3600 + minutes * 60);

  return `${hours > 0 ? hours > 9 ? hours : `0${hours} :` : ''}${
    minutes > 9 ? minutes : `0${minutes}`
  }:${second > 9 ? second : `0${second}`}`;
};

export function throttle(fn, threshold, scope) {
  let timer;
  let prev = Date.now();
  return function () {
      let context = scope || this, args = arguments;
      let now = Date.now();
      if (now - prev > threshold) {
          prev = now;
          fn.apply(context, args);
      }
  }
}
