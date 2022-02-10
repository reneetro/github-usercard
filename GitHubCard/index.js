import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/reneetro')
  .then(resp => {
    console.log(resp);
    
    //Create card element and assign card class
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cards = document.querySelector('.cards');

    //Create and add content for user image and append to card
    const userImage = document.createElement('img');
    userImage.src = resp.data.avatar_url;
    card.appendChild(userImage);

    //Create and add content for name and append to card
    const nameHolder = document.createElement('h1');
    nameHolder.textContent = resp.data.name;
    nameHolder.classList.add('name');
    card.appendChild(nameHolder);

    //Create and add content for username and append to card
    const userHolder = document.createElement('h2');
    userHolder.textContent = resp.data.login;
    userHolder.classList.add('username');
    card.appendChild(userHolder);

    //Create and add content for location and append to card
    const location = document.createElement('p');
    location.textContent = `Location: ${resp.data.location}`;
    card.appendChild(location);

    //Create and add content for profile link and append to card
    const profile = document.createElement('p');
    profile.textContent = `Profile: ${resp.data.html_url}`;
    card.appendChild(profile);

    //Create and add content for followers and append to card
    const followers = document.createElement('p');
    followers.textContent = `Followers: ${resp.data.followers}`;
    card.appendChild(followers);

    //Create and add content for following and append to card
    const following = document.createElement('p');
    following.textContent = `Following: ${resp.data.following}`;
    card.appendChild(following);
    //Create and add content for bio and append to card
    const bio = document.createElement('p');
    bio.textContent = `Bio: ${resp.data.bio}`;
    card.appendChild(bio);
    
    cards.appendChild(card);
  })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
