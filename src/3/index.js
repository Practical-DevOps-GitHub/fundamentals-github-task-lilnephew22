function task1() {
    function compact(arr) {
        const uniqueArray = [];

        for (const item of arr) {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        }
        return uniqueArray;
    }
    const arr = [5, 3, 4, 5, 6, 7, 3];
    const arr2 = compact(arr);
    console.log(arr2);
}
function task2() {
    function createArray(start, end) {
        const newArr = [];
        for (let i = start; i <= end; i++) {
            newArr.push(i);
        }
        return newArr;
    }
    let arr = createArray(2, 9);
    console.log(arr);
}
function task3() {
    function printNum(a, b) {
        for (let i = a; i <= b; i++) {
            for (j = 0; j < i; j++) {
                console.log(i);
            }
        }
    }
    const a = 2;
    const b = 4;
    printNum(a, b);
}
function task4() {
    function randArray(k) {
        const res = [];
        for (let i = 0; i <= k; i++) {
            const randNum = Math.floor(Math.random() * 500) + 1;
            res.push(randNum);
        }
        return res;
    }
    const k = 5;
    const randomNumbers = randArray(k);
    console.log(randomNumbers);
}
function task6() {
    function substract(a, b) {
        return a - b;
    }
    function sum(a, b) {
        return a + b;
    }
    function division(a, b) {
        return a / b;
    }
    function multiplication(a, b) {
        return a * b;
    }
    function calc(a, b, op) {
        if (op === 1) {
            return substract(a, b);
        }
        else if (op === 2) {
            return multiplication(a, b);
        }
        else if (op === 3) {
            return division(a, b);
        }
        else {
            return sum(a, b);
        }
    }
    console.log(calc(5, 2, 1))
}
function task7() {
    function findUnique(arr) {
        const uniqueSet = new Set(arr);
        return uniqueSet.size === arr.length;
    }
    const arr1 = [1, 2, 3, 5, 3];
    const arr2 = [1, 2, 3, 5, 11];
    console.log(findUnique(arr1));
    console.log(findUnique(arr2));
}
function task8() {
    function create(expected) {
        return function (input) {
            return expected === input;
        }
    }

    const tom = create("pass_for_Tom");
    console.log(tom("pass_for_Tom")); 
    console.log(tom("pass_for_tom"));
}
function task5(){
    let arr=[5, "limit", 12, "a", "3",99,2,[2,4,3,"33","text"], "strong","broun"];
let arr1=[];
let string=[];
let num=[];
function showTypes(a){
    for(let i=0;i<arr.length;i++){
        let check=Array.isArray(arr[i]);
        if(check){
            let mas=arr[i];
            for(let j=0;j<mas.length;j++){
                arr1.push(mas[j])
            }
        }
        else{
            arr1.push(arr[i])
        }
    }
    for(let i=0;i<arr1.length;i++){
        if(Number.isFinite(arr1[i])){
            num.push(arr1[i])
        }
        else{
            string.push(arr1[i])
        }
    }
    console.log(string)
    console.log(num)
}
showTypes(arr);
}
console.log("Завдання 1: ");
task1();
console.log(" ______________ \n Завдання 2:");
task2();
console.log(" ______________ \n Завдання 3:");
task3();
console.log(" ______________ \n Завдання 4:");
task4();
console.log(" ______________ \n Завдання 5:");
task5();
console.log(" ______________ \n Завдання 6:");
task6();
console.log(" ______________ \n Завдання 7:");
task7();
console.log(" ______________ \n Завдання 8:");
task8();