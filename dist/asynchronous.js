"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetch a todo item from the JSONPlaceholder API
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return yield response.json();
});
// Fetch and log the todo item
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield getTodo();
        console.log(result);
    }
    catch (error) {
        console.error('Error fetching todo:', error);
    }
});
getTodoData();
/**
//  * Create a promise that resolves with a string
//  * @returns a promise that resolves with a string
//  */
// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Hello World";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetch data");
//     }
//   });
// };
// /**
//  * Get data from the promise
//  * @returns a promise that resolves with a string
//  */
// const getpromisedata = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };
