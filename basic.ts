

let userName: string = "Jimrox";
let hasLoggedIn: boolean = true;

userName += " Odezi";

console.log(userName);

let myNumber: number = 100;

let myRegEx: RegExp = /true/;

const names: Array<string> = userName.split(" ");

// for (const name of names) {
//     console.log(name);
// }

interface Person {
    first: string;
    last: string;
}


const myPerson: Person = {
    first: "Jimrox",
    last: "Odezi"
};


// console.log(myPerson);


let ids: Record<number, string> = {
    10: "a",
    20: "b"
};

ids[30] = "c";
// console.log(ids);


// [1,2,3].forEach(v => console.log(v));

const out: Array<number> = [4,5,6].map(v => v *10);

console.log(out);