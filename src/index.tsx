import * as React from 'react';
import { render } from 'react-dom';
import { Counter } from './Counter';

const App = () => <Counter />;

render(<App />, document.getElementById('root'));