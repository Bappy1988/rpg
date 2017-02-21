import React from 'react';
import renderer from 'react-test-renderer';
import {FlexContainer, FlexItem} from '../client/app/components/common/flex';

test('Flex renders', () => {
	const tree = renderer.create(
		<FlexContainer direction="row">
			<FlexItem width="25%">Left</FlexItem>
			<FlexItem width="75%">Right</FlexItem>
		</FlexContainer>
	).toJSON();
	expect(tree).toMatchSnapshot();
});