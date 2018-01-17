Application.DreamySketch.Color.Component.Rgb = class Rgb extends Application.DreamySketch.Color.Component {
  static cast(value) {
    return parseInt(value);
  }

  static get maximum() {
    return 255;
  }
}