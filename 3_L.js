// Liskov substitution principle
// Принцип подстановки Лискова

// Функции, которые используют базовый тип, должны уметь с ним взоимодействовать,
// плюс взоимодействовать с подтипаними данного базового типа, при этом ничего не знать про это

class Person {
    access() {
        console.log('----------------------- У тебя есть доступ');
    }
}

class Frontend extends Person {
    canCreateFrontend() {}
}

class Backend extends Person {
    canCreateBackend() {}
}

// ЭТО НАРУШЕНИЕ ПРИНЦИПА: Liskov substitution principle
class PersonFromDifferentCompany extends Person{
    access() {
        throw new Error ('У тебя нет доступа! Иди к себе!')
    }
}

function openSecretDoor(persone) {
    persone.access()
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());
