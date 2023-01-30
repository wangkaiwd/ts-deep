class Component<P> {

  constructor (private props: P) {
    this.props = props;
  }

  getProps = () => this.props;
}

const component = new Component({ a: 1, b: 2, c: 3 });
component.getProps();
