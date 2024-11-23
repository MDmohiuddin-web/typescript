// pick 
interface Person {
    name: string;
    email: string;
    contactNumber: string;

}
// pick its min properties i need
type contact=Pick<Person,'email' | 'contactNumber'>

// omit its min properties i don't need
type Name=Omit<Person,'email' | 'contactNumber'>

// partial its min properties i need with optional
type partialPerson=Partial<Person>

// required its min properties i need with required
type requiredPerson=Required<Person>

// readonly its min properties i need with readonly
type readonlyPerson=Readonly<Person>

// record its min properties i need with readonly
type recordPerson=Record<string,Person>