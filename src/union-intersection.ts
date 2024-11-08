// Define a type for a beginner developer with only a name property
type NooBDeveloper = {
  name: string;
};

type nextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
};

// Define a type for a junior developer with additional properties
type JuniorDeveloper = {
  name: string;
  expertise: string;
  experience: number;

  level: string;
};

// Create a new developer object that can be either NooBDeveloper or JuniorDeveloper
const newDeveloper: NooBDeveloper | JuniorDeveloper = {
  // using union type to define the type of the newDeveloper object OR |
  name: "Mohi",
  expertise: "JavaScript",
  experience: 1,
  level: "junior",
};

// Log the developer object to console
console.log(newDeveloper);

// Create a new developer object that can be either NooBDeveloper or JuniorDeveloper
const developer: nextLevelDeveloper = {
  name: "Mohi",
  expertise: "typeScript",
  experience: 1,
  leadershipExperience: 1,
  level:"mid"
};

console.log(developer);