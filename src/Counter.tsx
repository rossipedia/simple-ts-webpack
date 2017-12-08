import * as React from 'react';

interface State {
  count: number;
}

export class Counter extends React.Component<{}, State> {
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>
          <button onClick={() => this.setState(s => ({ count: s.count + 1 }))}>
            +
          </button>
          <button onClick={() => this.setState(s => ({ count: s.count - 1 }))}>
            -
          </button>
        </p>
      </div>
    );
  }
}
