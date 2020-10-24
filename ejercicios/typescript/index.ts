console.log('Hello, TypeScript');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(2, 3);

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