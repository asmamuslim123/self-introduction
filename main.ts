//write an basic self introduction

//personal information
const Name: string = "Asma Muslim"
const education: string [] = ["Board of Secondary Education, Karachi"]
const skills: string [] = ["HTML","CSS","JAVASCRIPT","PYTHON","TYPESCRIPT"]
const experience: string = "less then 6 months"
const project: string [] = ["hello world", "Python", "45 assignments of node js and typescript"]

//print personal information
console.log(`My name is ${Name}`)
console.log(`I am a Art/Studies, General ${education}.`)
console.log("I have skills in :")
skills.forEach(skills => console.log("- " + skills))


console.log(`I have  ${experience} experience in Programming Languages: HTML, CSS, JavaScript, Typescript, Python, and node.js`)
console.log("Some of my projects includes")
project.forEach(project => console.log("* " + project))

console.log("Thank you")