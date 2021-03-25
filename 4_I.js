// Interface segregation principle
// Принцип разделения интерфейса

// Тек классы которые наследуются от базового класса, если они не используют методы данного базового класса, то не
// должны от них зависить

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimer = {
    swim() {
        console.log(`${this.name} can swim`);
    }

};

const walker = {
    walk() {
        console.log(`${this.name} can walk`);
    }
};

const flier = {
    fly() {
        console.log(`${this.name} can fly`);
    }
};

class Dog extends Animal {}
Object.assign(Dog.prototype, swimer, walker); // РЕАЛИЗАЦИЯ Interface segregation principle

class Eagle extends Animal {}
Object.assign(Eagle.prototype, flier, walker); // РЕАЛИЗАЦИЯ Interface segregation principle

class Whale extends Animal {}
Object.assign(Whale.prototype, swimer); // РЕАЛИЗАЦИЯ Interface segregation principle

const dog = new Dog('Rax');

// dog.fly(); у обхекта Класса Dog нет такого метода, так как мы такое пооведение не добавили через assign
dog.swim();
dog.walk();

const eagle = new Eagle('Tim');

eagle.fly();
// eagle.swim(); у обхекта Класса Dog нет такого метода, так как мы такое пооведение не добавили через assign
eagle.walk();

const whale = new Whale('Tom');

// whale.fly(); у обхекта Класса Dog нет такого метода, так как мы такое пооведение не добавили через assign
whale.swim();
// whale.walk(); у обхекта Класса Dog нет такого метода, так как мы такое пооведение не добавили через assign
