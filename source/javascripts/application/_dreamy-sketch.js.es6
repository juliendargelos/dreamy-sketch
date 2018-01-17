Application.DreamySketch = class DreamySketch extends Component {
  constructor(element) {
    this.element = element;
    this.canvas = new this.constructor.Canvas(this.element.querySelector('.dreamy-sketch__canvas'));
    this.touches = new this.constructor.Touch.List();

    this.canvas.element.addEventListener('mousedown', event => this.touches.updateFromMouseEvent(event));
    this.canvas.element.addEventListener('touchstart', event => this.touches.updateFromTouchEvent(event));
    window.addEventListener('mouseup', () => this.touches.clear());
    this.canvas.element.addEventListener('touchend', event => this.touches.updateFromTouchEvent(event));
  }

  get drawing() {
    return this.touches.any;
  }

  static init() {
    return new this(document.querySelector('.dreamy-sketch'));
  }
}