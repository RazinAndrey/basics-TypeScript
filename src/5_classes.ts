class TypeScript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}


// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;

//     constructor(theModel: string) {
//         this.model = theModel;
//     }
// }

class Car {
    // только для чтения
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) { }
}

// модификаторы
class Animal {
    // доступ внутри и для детей класса
    protected voice: string = '';
    public color: string = 'black';

    constructor() {
        this.go();
    }

    // доступ внутри
    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('Mya');
console.log(cat.color);


// aбcтрактные классы
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render')
    }
    info(): string {
        return 'This is info';
    }
}

