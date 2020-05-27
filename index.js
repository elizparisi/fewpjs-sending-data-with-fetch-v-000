// Add your code here

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };
 
  let obj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", obj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    
  })
  .catch(function(error) {
     displayMessage(error.message);
  });
 
};

