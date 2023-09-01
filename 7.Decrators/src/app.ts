function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString);
		console.log(constructor);
	};
}

function WithTemplate(template: string, hookID: string) {
	return function (constructor: any) {
		const hookElement = document.getElementById(hookID);
		const p = new constructor();
		if (hookElement) {
			hookElement.innerHTML = template;
			hookElement.querySelector('h1')!.textContent = p.name;
		}
	};
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
	name = 'Urosh';

	constructor() {
		console.log('Creating Person object');
	}
}

const pers = new Person();

console.log(pers);

////////////////////////////////////////////////////////////////////////////////////////////////

function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator');
	console.log(target, propertyName);
}

class Product {
	@Log
	set price(val: number) {
		if (val > 0) {
			this._price = val;
		} else {
			throw new Error('Invalid price - should be positive');
		}
	}
	constructor(public title: string, private _price: number) {}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax);
	}
}
