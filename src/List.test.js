import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const section = document.createElement('section');

    ReactDOM.render(<List header="test" cards={["1", "2"]} />, section);

    ReactDOM.unmountComponentAtNode(section);
});

it('renders ui as expected', () => {
    const tree = renderer
    .create(<List header="test" cards={["1"]} />)
    .toJSON()

    expect(tree).toMatchSnapshot();
})