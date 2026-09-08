interface NumberWithLogs {
  result: number;
  logs: string[];
}

const square = (x: number): NumberWithLogs => {
  const result = x * x;
  return { result, logs: [`Sqaured ${x} to get ${result}`] };
};

const addOne = (x: NumberWithLogs): NumberWithLogs => {
  const result = x.result + 1;
  return { result, logs: x.logs.concat([`Added 1 to get ${result}`]) };
};

console.log(addOne(square(3)));
