
let name: string;
name = 'Christian';

let random: any;

let random2: unknown;

let isStudent: boolean;
isStudent = true;

let hobbies: string[];
hobbies = ['sir', 'Christian'];

let age: number | string;
age = 'five';
age = 5;

let role: [number, string];
role = [5, 'five']

type Person1 = {
  name: string;
  age?: number;
}

interface Person {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type x = Person & {
  a: string;
  b: number;
}
let combined: x = {
  a: 'christian',
  b: 5,
  name: 'John',
  age: 36
}

let person: Person = {
  name: 'Christian',
}
let person2: Person = {
  name: 'John',
  age: 36
}

let lotsOfPeople: Person[];
lotsOfPeople = [person, person2]

// let printName: (name: string) => void;

function printName(name: string) {
  console.log(name);
}
printName('Sherry')

export default name;