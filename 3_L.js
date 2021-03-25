// Liskov substitution principle
// Принцип подстановки Лискова

// Функции, которые используют базовый тип, должны уметь с ним взоимодействовать,
// плюс взоимодействовать с подтипаними данного базового типа, при этом ничего не знать про это


// #########################################################
//                      ПРИМЕР 1
// #########################################################
class Person {
}

// Добавляем новую обстракцию:
class Member extends Person {
    access() {
        console.log('----------------------- У тебя есть доступ');
    }
}

class Guest extends Person{
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend() {}
}

class Backend extends Member {
    canCreateBackend() {}
}


class PersonFromDifferentCompany extends Guest{
    access() {// ЭТО НАРУШЕНИЕ ПРИНЦИПА: Liskov substitution principle
        throw new Error ('У тебя нет доступа! Иди к себе!')
    }
}

function openSecretDoor(member) {
    persone.access()
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany()); // The should be member
// То есть, суть сводится к тому, что мы сами должны правильно выбирать нужную обстракцию (слои) для extends
