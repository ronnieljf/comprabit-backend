class UserDTO {
  email;
  username;
  password;
  constructor(data) {
    this.email = data.email;
    this.username = data.username;
    this.password = data.password;
  }
}

module.exports = UserDTO;
