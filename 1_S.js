// Single Responsibility principle
// принцип Единая ответственность
// то есть сущность выполняет что то одно (например, не пихать в класс несколько функционалов координально отличных между собой, а выносить функционал
// поведение в новый класс)

class News {
    // Класс отвечающий только за инфу о нововсти
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.isModified = false;
    }

    update(text) {
        this.text = text;
        this.isModified = true;
    }
}


class NewsPrinter {
    // Класс отвечающий только за вывод информации
    constructor(news) {
        this.news = news
    }

    html() {
        return `
            <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            isModified: this.news.isModified
        }, null, 2)
    }
}

const printer = new NewsPrinter(new News('путин', 'Не лука'));
console.log(printer.html());
console.log(printer.json());
