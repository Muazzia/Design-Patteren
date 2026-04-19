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
})();
