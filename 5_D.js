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

class FetchClient {
    constructor() {
        this.fetch = new Fetch('endpoint.cpm');
    }

    clientGet() {
        return this.fetch.request()
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key)
    }
}

class DataBase {
    constructor(client) {
        this.client = client
    }

    getData(key) {
        return this.client.clientGet(key)
    }
}

const db = new DataBase(new FetchClient());
console.log(db.getData('rad'));
// если потом говорят: А  давай теперь данные из local storage брать, то просто делаем следующее:
const db2 = new DataBase(new LocalStorageClient());
console.log(db2.getData('eee'));
// То есть мы не меняем сущность верхнего уровня,
// что в результате ИСКЛЮЧИТ правки в сущнастях которые его используют


