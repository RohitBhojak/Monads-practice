const square = (x: number) => {
  return x * x;
};

const addOne = (x: number) => {
  return x + 1;
};

console.log(addOne(square(3)));
