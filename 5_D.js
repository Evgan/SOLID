// Dependency inversion principle
// Принцип инверсии зависимостей

// Верхний уровень модулей не должен зависеть от обстракций нижнего уровня
// Вообще: любые уровни должны зовисить от обстракций а не от конкретики

class Fetch {
    request(url) {
        // return fetch(url).then(r => r.json()) так как тестирую через node, то нет метода fetch
        // потому для теста дёрним ручкой:
        return Promise.resolve('получили тестовые данные чере fetch')
    }
}

class LocalStorage {
    get(key) {
        //return localStorage.getItem(key);  так как тестирую через node, то нет метода localStorage
        // потому для теста дёрним ручкой:
        const testData = 'Данные тестовые с localstorage';
        return testData;
    }
}

class DataBase {
    constructor() {
        // ПРишли и сказали что тепереь вместо fetch нужно тянуть данные из localStorage,
        // пришлось внеосить след изменения:
        // this.fetch = new Fetch() // ЭТО НАРУШЕНИЕ ПРИНЦИПА "Dependency inversion principle"
        this.localStorage = new LocalStorage() // ЭТО НАРУШЕНИЕ ПРИНЦИПА "Dependency inversion principle"
    }

    getData() {
        // ПРишли и сказали что тепереь вместо fetch нужно тянуть данные из localStorage,
        // пришлось внеосить след изменения:
        // return this.fetch.request('server-end-point.com') // ЭТО НАРУШЕНИЕ ПРИНЦИПА "Dependency inversion principle"
        return this.localStorage.get('key') // ЭТО НАРУШЕНИЕ ПРИНЦИПА "Dependency inversion principle"
    }
}

const db = new DataBase();
console.log('----------------------- ', db.getData());
