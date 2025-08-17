import {multiply} from "./calc/multiply";
import {add, subtract} from "./calc/addition";
const m = multiply(2, 3);
console.log(`The result of multiplication is: ${m}`);
console.log(`The result of addition is: ${add(2, 3)}`);
console.log(`The result of subtraction is: ${subtract(2, 3)}`);