const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfSrings: Array<string> = ['Hi', 'Andrew'];

// функия работающая с разными типами данных
// данная функция работает с типом T,
// далее мы принимаем массив с типом Т 
// и возращаем мы массив с типом T
function reverse<T>(array: T[]): T[] {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfSrings);