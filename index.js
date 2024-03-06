const submitData = (inputName, inputEmail) => {

    const formData = {
        name: inputName,
        email: inputEmail,
      };

    const ID = (i) => {   
      let h1 = document.createElement('h1')
      h1.textContent = i
      document.body.appendChild(h1)
    }
    
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(formData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          ID(object.id)
        })
        .catch(function (error) {         
          console.log(error.message);
          let message = 'Unauthorized Access'
          let h2 = document.createElement('h2')
          h2.textContent = message
          document.body.appendChild(h2)
        });
  }     