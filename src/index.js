//Find form with a query selector
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  //form.addEventListener("submit", (e)=>{
  e.preventDefault(); //to prevent the form's default submission behavior

  const formData = {
    //form information for user
    name: e.target.name.value,
    email: e.target.email.value,
    address: e.target.address.value,
    phone: e.target.phone.value,
    reason: e.target.reason.value,
    message: e.target.message.value,
  };

  renderConfirmation(formData);
});

const renderConfirmation = (formData) => {
  const h2 = document.createElement("h2");
  h2.textContent = "Submission Confirmation";

  //The tags for each value
  const nameP = document.createElement("p");
  nameP.textContent = formData.name;
  document.body.appendChild(nameP);

  const emailP = document.createElement("p");
  emailP.textContent = formData.email;
  document.body.appendChild(emailP);

  const addressP = document.createElement("p");
  addressP.textContent = formData.address;
  document.body.appendChild(addressP);

  const phoneP = document.createElement("p");
  phoneP.textContent = formData.phone;
  document.body.appendChild(phoneP);

  const reasonP = document.createElement("p");
  reasonP.textContent = formData.reason;
  document.body.appendChild(reasonP);

  const messageP = document.createElement("p");
  messageP.textContent = formData.message;
  document.body.appendChild(messageP);

  const section = document.querySelector("section");
  section.innerHTML = "";

  section.append(h2, nameP, emailP, addressP, phoneP, reasonP, messageP);
};
