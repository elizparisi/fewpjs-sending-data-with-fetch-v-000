// Add your code here

function submitData(name, email) {
  
  let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
fetch("http://localhost:3000/dogs", configObj)
};