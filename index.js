function sendMail() {
    var params = {
      email: document.getElementById("email").value,
      message: document.getElementById("password").value,
    };
  
    const serviceID = "service_2v6gaqc";
    const templateID = "template_kvwvdc8";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
  