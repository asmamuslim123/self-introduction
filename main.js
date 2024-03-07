//write an basic self introduction
//personal information
const Name = "Asma Muslim";
const education = ["Board of Secondary Education, Karachi"];
const skills = ["HTML", "CSS", "JAVASCRIPT", "PYTHON", "TYPESCRIPT"];
const experience = "less then 6 months";
const project = ["hello world", "Python", "45 assignments of node js and typescript"];
//print personal information
console.log(`My name is ${Name}`);
console.log(`I am a Art/Studies, General ${education}.`);
console.log("I have skills in :");
skills.forEach(skills => console.log("- " + skills));
console.log(`I have  ${experience} experience in Programming Languages: HTML, CSS, JavaScript, Typescript, Python, and node.js`);
console.log("Some of my projects includes");
project.forEach(project => console.log("* " + project));
console.log("Thank you");
export {};
