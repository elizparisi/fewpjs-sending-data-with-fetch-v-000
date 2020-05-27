// Add your code here

function submitData(name, email) {
  let formData = {
    name: name,
    email: email
  };
 
  let object = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
 
};


  function appendNewPElement(param) {
    let element = document.createElement("p");
    element.innerHTML = param;``
    document.body.appendChild(element);
  };

  return fetch("http://localhost:3000/users", obj)
    .then(resp => resp.json())
    .then(user => appendNewPElement(user.id))
    .catch(error => appendNewPElement(error.message));
};