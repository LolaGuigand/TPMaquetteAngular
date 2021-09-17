export class Personne {
  private _pseudo :  String;

  constructor(pseudo: String) {
    this._pseudo = pseudo;

  }

  get pseudo(): String {
    return this._pseudo;
  }

  set pseudo(value: String) {
    this._pseudo = value;
  }


}
