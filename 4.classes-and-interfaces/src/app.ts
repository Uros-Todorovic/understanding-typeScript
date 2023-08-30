// type AddFn = (a: number, b: number) => number;

interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
	return n1 + n2;
};

interface Named {
	readonly name: string;
	outputName?: string;
}

interface Greetable extends Named {
	greet(phrase: string): void;
}

class Person implements Greetable {
	constructor(public name: string) {}
	greet(phrase: string): void {
		console.log(`${phrase} ${this.name}`);
	}
}

let user1: Greetable;

user1 = {
	name: 'Urosh',
	greet(phrase: string) {
		console.log(`${phrase} ${this.name}`);
	},
};

user1.greet('Hi there I am - ');
