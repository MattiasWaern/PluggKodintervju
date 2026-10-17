 interface Form  {
  name: string;
  email:string;
  message: string;
};


 const formInputs: Form = {
    name: "Mattias",
    email: "mattiaswaern04gmail.com", 
    message: "Din fula unge" 
    }


function ValidateContactForm(formInputs: Form){


console.log("Form data:", formInputs);
}



export default ValidateContactForm;