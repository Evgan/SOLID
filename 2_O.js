// Open Close principle

// Какието классы должны быть доступны для разширения но закрыты для модифицирования

class Square {
    constructor(size) {
        this.type = 'Square';
        this.size = size;
    }
}

class Circle {
    constructor(radius) {
        this.type = 'Circle';
        this.radius = radius
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            if(shape.type === 'Circle') {
                acc += (shape.radius ** 2) * Math.PI
            } else if (shape.type === 'Square') {
                acc += shape.size ** 2
            }
            return acc;
        }, 0)
    }

}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5)
]);

console.log('----------------------- ');
console.log(calc.sum());
