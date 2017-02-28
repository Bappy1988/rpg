import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundComponent from '../notfound.component';

test('NotFound renders', () => {
	const tree = renderer.create(
		<NotFoundComponent />
	).toJSON();
	expect(tree).toMatchSnapshot();
});