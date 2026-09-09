interface NumberWithLogs {
  result: number;
  logs: string[];
}

const wrapNumberWithLogs = (x: number): NumberWithLogs => {
  return { result: x, logs: [] };
};

const runWithLogs = (input: NumberWithLogs, transform: (_: number) => NumberWithLogs) => {
  const newNumberWithLogs = transform(input.result);
  return {
    result: newNumberWithLogs.result,
    logs: input.logs.concat(newNumberWithLogs.logs),
  };
};

const square = (x: number): NumberWithLogs => {
  const result = x * x;
  return { result, logs: [`Squared ${x} to get ${result}`] };
};

const addOne = (x: number): NumberWithLogs => {
  const result = x + 1;
  return { result, logs: [`Added 1 to get ${result}`] };
};

const multiplyByThree = (x: number): NumberWithLogs => {
  const result = x * 3;
  return { result, logs: [`Multiplied ${x} by 3 to get ${result}`] };
};

const a = wrapNumberWithLogs(3);
const b = runWithLogs(a, square);
const c = runWithLogs(b, addOne);

console.log(c);

// New function can be plugged in easily
const d = runWithLogs(c, multiplyByThree);
console.log(d);
