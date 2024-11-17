interface iTodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  
  // Fetch a todo item from the JSONPlaceholder API
  const getTodo = async (): Promise<iTodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };
  
  // Fetch and log the todo item
  const getTodoData = async (): Promise<void> => {
    try {
      const result = await getTodo(); 
      console.log(result);
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  };
  
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
