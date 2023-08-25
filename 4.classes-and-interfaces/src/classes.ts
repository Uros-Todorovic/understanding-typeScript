abstract class Department {
	protected employees: string[] = [];
	static fiscalYear = 2020;

	constructor(protected readonly id: string, private name: string) {}

	abstract describe(this: Department): void;

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}

	static createEmployee(name: string) {
		return {
			name,
		};
	}
}

class ITDepartment extends Department {
	private static instance: ITDepartment;

	private constructor(id: string, public admins: string[]) {
		super(id, 'IT');
	}

	static getInstance() {
		if (ITDepartment.instance) {
			return ITDepartment.instance;
		}
		ITDepartment.instance = new ITDepartment('D2', ['Urosh']);
		return this.instance;
	}

	describe() {
		console.log(`Accounting department - ID: ${this.id}`);
	}
}

class Accounting extends Department {
	private lastReport: string;

	get mostRecentReport() {
		if (this.lastReport) {
			return this.lastReport;
		}
		throw new Error('No report found');
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass value');
		}
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting');
		this.lastReport = reports[0];
	}

	addEmployee(name: string): void {
		if (name === 'Urosh') {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}

	describe() {
		console.log(`Accounting department - ID: ${this.id}`);
	}
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = ITDepartment.getInstance();
it.describe();
it.addEmployee('Urosh');
it.addEmployee('Nebojsa');
it.printEmployeeInformation();

const accounting = new Accounting('D2', []);
accounting.mostRecentReport = 'Year end report';
accounting.addReport('Tax');
// accounting.printReports();
accounting.addEmployee('Max');
// accounting.printEmployeeInformation();
console.log(accounting.mostRecentReport);
accounting.describe();

/* const accountingCoppy = { name: 'Accounting Coppy', describe: accounting.describe };
accountingCoppy.describe(); */
