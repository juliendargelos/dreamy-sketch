Application.DreamySketch.Touch = class Touch extends Component {
  constructor(position, speed, identifier) {
    this.position = this.constructor.Vector.from(position);
    this.speed = this.constructor.Vector.from(speed);
    this.identifier = arguments.length >= 3 ? identifier : 1;
  }

  get identifier() {
    return this._identifier;
  }

  set identifier(v) {
    this.identifier = v + '';
  }

  update(x, y) {
    var position = this.constructor.Vector(x, y);

    this.speed.set(position.x - this.position.x, position.y - this.position.y);
    this.position.set(position);
  }

  updateFromMouseEvent(event) {
    this.update(event.clientX, event.clientY);
  }

  updateFromTouchEvent(touch) {
    this.update(touch.pageX, event.pageY);
  }

  static fromMouseEvent(event) {
    return new this({x: event.clientX, y: event.clientY});
  }

  static fromTouchEvent(touch) {
    return new this({x: touch.pageX, y: touch.pageY}, null, touch.identifier);
  }
}