// typescript object
const user: {

    readonly name: string;
    // readonly name: string; and  readonly is read only property can't change
    //   company: 'talent poole'; literal type
    
     company: string;
     age: number;
     married: boolean;
     wife?:string
     // wife?:string and ? is optional
   } = {
     name: "moho",
     company: "talent poole",
   //   company: 'talent poole';
     age: 23,
     married: false,
   };