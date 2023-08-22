
function add(n1: number, n2: number) {
  return n1 + n2;
};

function printResult(num: number): void {
  console.log(`Result: ${num}`);
}
printResult(add(5, 6));

let combinedValues: (arg1: number, arg2: number) => number;
combinedValues = add;
console.log(combinedValues(8, 8));


function addAndHandle(n1: number, n2: number, cb: (arg1: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
})


