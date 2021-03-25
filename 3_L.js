// Liskov substitution principle
// Принцип подстановки Лискова

// Функции, которые используют базовый тип, должны уметь с ним взоимодействовать,
// плюс взоимодействовать с подтипаними данного базового типа, при этом ничего не знать про это


// #########################################################
//                      ПРИМЕР 1
// #########################################################
/*
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
*/


// #########################################################
//                      ПРИМЕР 2
// #########################################################



class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component{
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate{
    onInit(){}
}

class FooterComponent extends ComponentWithTemplate{
    afterInit() {}
}

// это Higher Order Component
// Компонент более высокого порядка (в документации Higher-Order Components – сокращенно HOC)
// - это продвинутая техника в React для повторного использования логики компонента.
// По существу, HOC не являются частью React API.
// Они - паттерн, который вытекает из композиционной природы React.
// Они не имеют в себе метот Render. Они принимат на вход класс, а на выход выдают другой мадифицированный класс
class HOC extends HigherOrderComponent{
    render() { // ЭТО НАРУШЕНИЕ ПРИНЦИПА: Liskov substitution principle
        throw new Error ('Render is impossible here')
    }
    wrapComponent (component) {
        component.wrapped = true;
        return component;
    }
}

function RenderComponent(component) {
    console.log(component.render())
}

RenderComponent(new HeaderComponent());
RenderComponent(new FooterComponent());
// Что бы выполнялся Liskov substitution principle выполнение следующей строки не возможно, потому её убираем:
//RenderComponent(new HOC());
// Теперь код примера №2 не нарушает Liskov substitution principle
