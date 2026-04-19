// What is Encapsulation in OOP?
// Encapsulation is the process of combining data and functions together
// Properties and their methods together, this is the same line as above just in oop lang.

enum Language {
  "English",
  "Urdu",
}

class Person {
  private _name: string;
  private _age?: number;
  private _language?: Language;

  constructor(name: string) {
    this._name = name;
  }

  setAge(age: number) {
    this._age = age;
  }

  setLanguage(language: Language) {
    this._language = language;
  }

  getName() {
    return this._name;
  }

  getPersonDate() {
    return {
      name: this._name,
      age: this._age,
      language: this._language,
    };
  }
}

(() => {
  const muaz = new Person("Muaz");
  muaz.setAge(10);
  const talha = new Person("Talha");

  console.log(muaz.getName());
  console.log(muaz);
  console.log(muaz.getPersonDate());
  console.log(talha.getName());
})();
