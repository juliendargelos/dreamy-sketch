Application.DreamySketch.Touch.List = class List extends Component {
  constructor() {
    this.object = {};
  }

  get array() {
    return Object.values(this.object);
  }

  get first() {
    return this.array[0];
  }

  get length() {
    return this.array.length;
  }

  get any() {
    return this.length !== 0;
  }

  push(touch) {
    this.object[touch.identifier] = touch;

    return this;
  }

  clear() {
    this.object = {};

    return this;
  }

  get(identifier) {
    return this.object[identifier + ''];
  }

  each(callback) {
    this.array.forEach((...args) => callback.call(this, ...args));

    return this;
  }

  remove(touch) {
    delete this.object[touch.identifier];
  }

  filter(callback) {
    this.each((touch, n) => {
      if(callback.call(this, touch, n) === false) this.remove(touch);
    });

    return this;
  }

  updateFromMouseEvent(event) {
    if(this.first) this.first.updateFromMouseEvent(event);
    else this.push(Application.DreamySketch.Touch.fromMouseEvent(event));

    return this;
  }

  updateFromTouchEvent(event) {
    var identifiers = [];

    Array.prototype.forEach(event.targetTouches, touch => {
      if(this.get(touch.identifier)) this.get(touch.identifier).updateFromTouchEvent(touch);
      else this.push(Application.DreamySketch.Touch.fromTouchEvent(touch));
      identifiers.push(touch.identifier);
    });

    this.filter(touch => identifiers.includes(touch.identifier));

    return this;
  }
}