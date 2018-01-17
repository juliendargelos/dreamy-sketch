Application.DreamySketch.Touch.Vector.Coordinate = class Coordinate extends Component {
  constructor(value) {
    this.value = arguments.length === 0 ? 0 : value;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = typeof v === 'number' ? v : this.constructor.cast(v);
    if(isNaN(this._value)) this._value = 0;
  }

  static cast(value) {
    return parseFloat(value);
  }
}