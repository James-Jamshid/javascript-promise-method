function container() {
  let result = "";

  setTimeout(() => {
    students.forEach((Element) => {
      result += `<li>${Element.first_name} ${Element.phone_numer}</li>`;
    });

    document.body.innerHTML = result;
  }, 1000);
}

function addStudent(Element) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      students.push(Element);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("ups something is wrong");
      }
    }, 2000);
  });
}

addStudent({ first_name: "Honor", phone_numer: "770-768-9865" }).then(
  container
);
