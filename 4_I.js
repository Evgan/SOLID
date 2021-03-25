// Interface segregation principle
// Принцип разделения интерфейса

// Тек классы которые наследуются от базового класса, если они не используют методы данного базового класса, то не
// должны от них зависить

class Animal {
    constructor(name) {
        this.name = name
    }

    walk() {
        console.log(`${this.name} can walk`);
    }

    swim() {
        console.log(`${this.name} can swim`);
    }

    fly() {
        console.log(`${this.name} can fly`);
    }
}

class Dog extends Animal {
    fly() {
        return null; // Собаки не умеют летать, потому переопределяем метот с return null, НО ЭТО НАРУШЕНИЕ Interface segregation principle
    }
}

class Eagle extends Animal {
    swim() {
        super.swim();  // Орёл не умеют плавать, потому переопределяем метот с return null, НО ЭТО НАРУШЕНИЕ Interface segregation principle
    }
}

class Whale extends Animal {
    fly() {
        return null; // Кит не умеют летать, потому переопределяем метот с return null, НО ЭТО НАРУШЕНИЕ Interface segregation principle
    }
}

const dog = new Dog('Rax');

dog.fly();
dog.swim();
dog.walk();

const eagle = new Eagle('Tim');

eagle.fly();
eagle.swim();
eagle.walk();

const whale = new Whale('Tom');

whale.fly();
whale.swim();
whale.walk();
