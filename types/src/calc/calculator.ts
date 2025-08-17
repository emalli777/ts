import {add} from './calculatorAdd';

export function calc(a: number, b: number): number {
  const added = add(a, b);
  return subtract(added, b);
}



 function subtract(a: number, b: number): number {   
  return a - b;
}