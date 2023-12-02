import { expect, jest, describe, it } from "@jest/globals";
import { Dog, Cat } from "../src/animals.js";

describe("Dog", () => {
	it("should create an instance", () => {
		expect(new Dog()).toBeTruthy();
	});
	it("should create a dog sound", () => {
		const consoleMock = jest.spyOn(console, "log").mockImplementation(() => {});
		const dog = new Dog();
		dog.makeSound();
		expect(consoleMock).toBeCalledWith("Woof!");
		consoleMock.mockRestore();
	});
});

describe("Cat", () => {
	it("should create an instance", () => {
		expect(new Cat()).toBeTruthy();
	});
	it("should create a cat sound", () => {
		const consoleMock = jest.spyOn(console, "log").mockImplementation(() => {});
		const cat = new Cat();
		cat.makeSound();
		expect(consoleMock).toBeCalledWith("Meow!");
		consoleMock.mockRestore();
	});
});
