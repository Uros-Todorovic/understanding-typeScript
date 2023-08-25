interface Greetable {
	name: string;
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
