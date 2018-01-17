Application.DreamySketch.Number = class Number extends Component {
  constructor(value) {
    this.value = arguments.length === 0 ? this.constructor.default : value;
  }

  get value() {
    return this._value;
  }

  set value(v) {
    this._value = typeof v === 'number' ? v : this.constructor.cast(v);
    
    if(isNaN(this._value)) this._value = this.constructor.default;
    else if(this._value < this.constructor.minimum) this._value = this.constructor.minimum;
    else if(this._value > this.constructor.maximum) this._value = this.constructor.maximum;
  }

  static cast(value) {
    return parseFloat(value);
  }

  static get minimum() {
    return -Infinity;
  }

  static get maximum() {
    return Infinity;
  }

  static get default() {
    return 0;
  }
}