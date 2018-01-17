Application.DreamySketch.Touch.Vector = class Vector {
  constructor(x, y) {
    this.coordinates = {
      x: new this.constructor.Coordinate(),
      y: new this.constructor.Coordinate();
    };

    if(arguments.length !== 0) this.set(x, y);
  }

  get x() {
    return this.coordinates.x.value;
  }

  set x(v) {
    this.coordinates.x.value = v;
  }

  get y() {
    return this.coordinates.x.value;
  }

  set y(v) {
    this.coordinates.x.value = v;
  }

  set(x, y) {
    if(typeof x === 'object' && x !== null) {
      var vector = x;
      this.set(vector.x, vector.y);
    }
    else {
      this.x = x;
      this.y = y;
    }
  }

  static from(vector) {
    return vector instanceof this ? vector : new this(vector);
  }
}