let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Uros';

if(typeof userInput === 'string') {
  userName = userInput;
}


function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
};

generateError('An error occured!', 500);