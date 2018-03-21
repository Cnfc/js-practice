
const github = new Github;// Init Github

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

        } else{
          // Show profile
        }
      });
  } else {
    // Clear profile
    
  }
});
