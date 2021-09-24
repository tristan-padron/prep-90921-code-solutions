const person = {
  firstName: 'Bob',
  lastName: 'The Builder',
  hobby: 'Builds things'
};
console.log('The Person is', person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('The person name is', fullName);

person.job = 'TV character';
console.log('Bobs job is', person.job);

person.previousJob = 'Student';
console.log('Bobs previous job was', person.previousJob);
