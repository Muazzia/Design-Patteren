// What is Single Responsibility Pattern?
// It is a principle that defines that

class User {
  private _userName: string;
  private _password: string;

  constructor(userName: string, password: string) {
    this._userName = userName;
    this._password = password;
  }

  authenticate(userName: string, password: string) {
    if (this._userName === userName && this._password === password) {
      return true;
    } else {
      throw new Error("Invalid");
    }
  }
}

(() => {
  const muaz = new User("Muaz", "123123");
  console.log(muaz.authenticate("Muaz", "123123"));
})();

// The above example shows the user class is handling 2 things
// First is the user data and the second one is authentication

class UserData {
  userName: string;
  password: string;

  constructor(userName: string, password: string) {
    this.userName = userName;
    this.password = password;
  }
}

class UserAuthentication {
  private _user: UserData;

  constructor(user: UserData) {
    this._user = user;
  }

  authenticate(userName: string, password: string) {
    if (this._user.userName === userName && this._user.password === password) {
      return true;
    } else {
      return "Invalid";
    }
  }
}

const newMuaz = new UserData("Muaz", "123123");
const auth = new UserAuthentication(newMuaz);
// const auth = new UserAuthentication(newMuaz);
console.log(auth.authenticate("Muaz", "1231231"));
