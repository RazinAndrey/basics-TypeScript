interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number,
    name: string,
    email: string,
    createdAt: Date
}

// убираем ключи
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// забираем ключи
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name';
let u2: UserKeysNoMeta2 = {
    name: 'John',
    email: 'qqq',
};

