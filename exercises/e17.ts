export const minBy = <T>(
  array: T[],
  cb: (element: T) => string | number
): T | undefined => {
  let temp = array[0];
  if (array.length) {
    for (let element of array) {
      if (temp !== undefined && cb(temp) > cb(element)) {
        temp = element;
      }
    }
    return temp;
  } else {
    return undefined;
  }
};

export function maxBy<T>(
  array: T[],
  cb: (element: T) => string | number
): T | undefined {
  let temp = array[0];
  if (array.length) {
    for (let element of array) {
      if (temp !== undefined && cb(temp) < cb(element)) {
        temp = element;
      }
    }
    return temp;
  } else {
    return undefined;
  }
}
