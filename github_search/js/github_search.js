const usernameinput = document.querySelector('#username_input');
const searchbutton = document.querySelector('#search_button');
searchbutton.addEventListener('click', function () {
  const name = usernameinput.value;

  fetch('https://api.github.com/users/' + name)
    .then(function (res) {
      return res.json();
    })
    .then(function (user) {
      console.log(user);
    });
});