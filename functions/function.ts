

export function addNumbers(a: number, b: number) {
    return a + b;
}


// export default addNumbers;

export const addStrings = (str1: string, str2: string): string => 
                        `${str1} ${str2}`;


export function introduce(
    salutation: string, 
    ...names: string[]): string 
    {
    return `${salutation}! ${names.join(" ")}.`;
}