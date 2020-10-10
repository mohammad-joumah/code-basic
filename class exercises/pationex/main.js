/**
 * createPatientData: can create patient data and store it
 */
function createPatientData(e) {
   e.preventDefault();
//    console.log(e);
//    console.log(e.target);
//    console.log(e.target.firstName)
//    console.log(e.target.firstName.value)
   let data = e.target;
   let firstName = data.firstName.value; 
   let lastName = data.lastName.value;
   let age = data.age.value;
   console.log(firstName, lastName, age);
   // save data inside local storage
}