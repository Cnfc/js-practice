class Github {
  constructor(){
    this.client_id = '04f5fa2ea661af652da0';
    this.client_secret = 'dba41aef7c476f81cfeba0742c90644d95c56fa3';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile
    }
  }
}
