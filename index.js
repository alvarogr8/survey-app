document.getElementById("myform").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log({ formProps });
  alert(JSON.stringify(formProps).replace(/,|{|}/g, "\n").replace(/"/g, " "));
});
