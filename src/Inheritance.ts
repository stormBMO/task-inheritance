interface IPersonData {
    name: string;
    secondName: string;
    age: number;
}

interface IStudentData extends IPersonData {
    phone: string;
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IPersonData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IPersonData
 */
export class Person {
    readonly _name: string;
    readonly _secondName: string;
    readonly _age: number;
    constructor(Person: IPersonData) {
        this._name = Person.name;
        this._secondName = Person.secondName;
        this._age = Person.age;
    }

    getData(): IPersonData {
        const Person: IPersonData = {
            name: this._name,
            secondName: this._secondName,
            age: this._age,
        };
        return Person;
    }
}

/*
1. Напишите конструктор, который принимает в качестве параметра объект с интерфейсом IStudentData
2. Добавьте метод getData(), возвращающий объект, соответствующий интерфейсу IStudentData
 */
export class Student extends Person {
    readonly _phone: string;
    constructor(Student: IStudentData) {
        super(Student);
        this._phone = Student.phone;
    }
    getData(): IStudentData {
        return {
            ...super.getData(),
            phone: this._phone,
        };
    }
}
