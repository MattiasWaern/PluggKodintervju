interface Form {
  name: string;
  email: string;
  message: string;
}

const formInputs: Form = {
  name: "Mattias",
  email: "mattiaswaern04@gmail.com",
  message: "Din fula unge"
};

function ValidateContactForm(formInputs: Form) {
  if (!formInputs.name.trim()) {
    return "false";
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formInputs.email.trim())) {
    return "false";
  }

  
  if (!formInputs.message.trim()) {
    return "false";
  }


  return "true";
}

console.log(ValidateContactForm(formInputs));

export default ValidateContactForm;