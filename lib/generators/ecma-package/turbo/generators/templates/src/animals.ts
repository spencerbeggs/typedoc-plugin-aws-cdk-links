export abstract class Animal {
	abstract makeSound(): void;
}

export class Dog extends Animal {
	makeSound(): void {
		console.log("Woof!");
	}
}

export class Cat extends Animal {
	makeSound(): void {
		console.log("Meow!");
	}
}
