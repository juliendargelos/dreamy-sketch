Application.DreamySketch.Canvas = class Canvas extends Component {
  constructor(element) {
    this.element = element;
    this.context = this.element.getContext('2d');
    this.resizeListener = () => this.resize();
    this.autoResize = true;
  }

  get parent() {
    return this.element.parentNode;
  }

  get width() {
    return this.element.width;
  }

  set width(v) {
    this.element.width = v;
  }

  get height() {
    return this.element.height;
  }

  set height(v) {
    this.element.height = v;
  }

  get autoResize() {
    return this._autoResize || false;
  }

  set autoResize(v) {
    v = !!v;

    if(v !== this.autoResize) {
      if(v) window.addEventListener('resize', this.resizeListener);
      else window.removeEventListener('resize', this.resizeListener);
    }
  }

  resize() {
    if(this.parent) {
      this.width = this.parent.offsetWidth;
      this.height = this.parent.offsetHeight;
    }
  }
}