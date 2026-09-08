interface NumberWithLogs {
  result: number;
  logs: string[];
}

const wrapNumberWithLogs = (x: number): NumberWithLogs => {
  return { result: x, logs: [] };
};

const square = (x: NumberWithLogs): NumberWithLogs => {
  const result = x.result * x.result;
  return { result, logs: x.logs.concat([`Sqaured ${x.result} to get ${result}`]) };
};

const addOne = (x: NumberWithLogs): NumberWithLogs => {
  const result = x.result + 1;
  return { result, logs: x.logs.concat([`Added 1 to get ${result}`]) };
};

console.log(addOne(square(wrapNumberWithLogs(3))));
console.log(square(square(wrapNumberWithLogs(3))));
