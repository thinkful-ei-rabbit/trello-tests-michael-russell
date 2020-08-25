import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import List from './List';

describe('<List />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
          .create(<List />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
})