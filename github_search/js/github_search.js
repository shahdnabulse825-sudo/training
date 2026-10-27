const usernameinput = document.querySelector('#username_input');
const searchbutton = document.querySelector('#search_button');
const usersList = document.querySelector('#users_list');
const message = document.querySelector('#message');

const showuser = (data, username) => {
  const row = document.createElement('div');
  row.className = 'user_row';
  row.id = `user_${username}`;

  let info = '';

  if (data.name !== null) {
    info += `<p>Name: ${data.name}</p>`;
  }
  if (data.company !== null) {
    info += `<p>Company: ${data.company}</p>`;
  }
  if (data.email !== null) {
    info += `<p>Email: ${data.email}</p>`;
  }
  info += `<p>Followers: ${data.followers}</p>`;
  info += `<p>Following: ${data.following}</p>`;
  info += `<p>Public repos: ${data.public_repos}</p>`;
  row.innerHTML = `<img src="${data.avatar_url}"><div>${info}</div>`;
  usersList.appendChild(row);
};

const searchUser = () => {
  const username = usernameinput.value.trim().toLowerCase();
  if (username === '') {
    return;
  }

  const oldrow = document.querySelector(`#user_${username}`);
  if (oldrow !== null) {
    oldrow.scrollintoview({ behavior: 'smooth' });
    return;
  }

  message.textContent = '';

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => showuser(data, username))
    .catch(error => {
      message.textContent = error.message;
    });
};
searchbutton.addEventListener('click', searchUser);


