console.log('Hello, TypeScript');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 3);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6);

function fullName(firstname:string, lastname:string = 'Smith') {
  return `${firstname} ${lastname}`
}

const richard = fullName('Agente')
console.log(richard);


// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push(900);
peopleAndNumbers.push('Raul');

// Enum
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
  Amarillo = 'Amarillo',
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comdin: any = 'Joker';
comdin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };
