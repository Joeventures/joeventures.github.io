age = prompt('enter your age');
age = parseInt(age);

if(age < 16) {
  alert('You can go to school');
} else if(age < 18) {
  alert('You can drive');
} else if (age < 21) {
  alert('You can vote');
} else if (age < 25) {
  alert('You can drink alcohol');
} else if (age < 35) {
  alert('You can rent a car');
} else if (age < 62) {
  alert('You can run for president');
} else {
  alert('You collect social security benefits');
}