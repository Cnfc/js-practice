
const github = new Github;// Init Github
const ui = new UI; //Init UI

const searchUser = document.getElementById('searchUser');// Search input

// search input  event listener
searchUser.addEventListener('keyup', (e) => {

  const userText = e.target.value;// get input text

  if(userText !== ''){
    // make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found '){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        } else{
          // Show profile
          ui.showProfile(data.profile);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
