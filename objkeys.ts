

export const myObj = {
    a: 1,
    b: 2,
    c: 3
};


// Object.keys(myObj).forEach(key => {
//     console.log(myObj[key]);
// })

const objectKeys = <Obj extends {}>(obj: Obj): (keyof Obj)[] => {
    return Object.keys(obj) as (keyof Obj)[];
};

objectKeys(myObj).forEach(key => {
    console.log(myObj[key]);
    
})