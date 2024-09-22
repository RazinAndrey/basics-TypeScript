//Types Data
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

// Tupele
const contact: [string, number] = ['Vladilen', 1234567];

// Any
let variable: any = 42;
variable = 'new str';
variable = [];

// Function
function sayMyName(name: string): void {
    console.log(name);
}
sayMyName('Andrew');

// Never
function throwError(message: string): never {
    throw new Error(message);
}
function infinite(): never {
    while (true) { }
}

// Type(свои типы)
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 123;
const id2: ID = '1234'; 

type SomeType = string | null | undefined;
