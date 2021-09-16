export class Personne {
  private _pseudo :  String;
  private _id: number;



  constructor(pseudo: String, id: number) {
    this._pseudo = pseudo;
    this._id = id;
  }

  get pseudo(): String {
    return this._pseudo;
  }

  set pseudo(value: String) {
    this._pseudo = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

}
