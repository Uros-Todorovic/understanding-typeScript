/* const names: Array<string> = [];

const promise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done');
	}, 2000);
});

promise.then((data) => {
	data.split(' ');
});
 */

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Urosh', hobbies: ['Sports'] }, { age: 38 });
console.log(mergedObj.name);

interface Lengthy {
	length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value.';
	if (element.length === 1) {
		descriptionText = `Got 1 element`;
	} else if (element.length > 1) {
		descriptionText = `Got ${element.length} elements`;
	}
	return [element, descriptionText];
}
console.log(countAndDescribe('Hi there'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'Urosh' }, 'name');

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Urosh');
textStorage.addItem('Nebojsa');
textStorage.removeItem('Urosh');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(50);

/* const objectSotage = new DataStorage<object>();
objectSotage.addItem({ name: 'Urosh' });
objectSotage.addItem({ name: 'Nebojsa' });
objectSotage.removeItem({ name: 'Nebojsa' });
console.log(objectSotage.getItems()); */

interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};

	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Urosh', 'Nebojsa'];
