type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function add(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor){
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
   result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
};

console.log(add(30, 26, 'as-number'));
console.log(add('30', '26', 'as-number'));
console.log(add('urosh', 'todorovic', 'as-text'));

