const numberOfFields = window.prompt("Please enter your required fields...");

document.write(`<h2>Number of Fields = ${numberOfFields} </h2>`);

for (let i = 0; i < numberOfFields; i++) {
  const key = window.prompt(`Enter your ${i + 1} key...`);
  const value = window.prompt(`Enter your ${i + 1} value...`);
  document.write(`<h3>${key} - ${value}</h3>`);
}
