function add(a: number, b: number): number {
    return a + b;
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase();
}

// перезагрузка функции
interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string;
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return { x: a, y: b }
}

console.log('Emty: ', position());
console.log('One param: ', position(40));
console.log('Two params: ', position(10, 15));
