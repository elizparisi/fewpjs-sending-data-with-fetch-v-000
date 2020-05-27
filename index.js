// Add your code here

function submitData(name, email) {
  
  let formData = {
    name: name,
    email: email
  };
 
  let object = {
    method: "POST"
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
 
};