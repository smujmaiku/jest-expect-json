import './expect-json';

describe('expect-json', () => {
	describe('jsonContaining', () => {
		it('should contain json', () => {
			expect({
				object: '{"b":1,"c":2}',
				array: '[1,2]',
				string: '"mock"',
				number: '7',
			}).toEqual({
				object: expect.jsonContaining({ b: 1 }),
				array: expect.jsonContaining([1]),
				string: expect.jsonContaining('oc'),
				number: expect.jsonContaining(7),
			});
		});
	});

	describe('jsonMatching', () => {
		it('should match json', () => {
			expect({
				object: '{"b":1}',
				array: '[1]',
				string: '"mock"',
				number: '7',
			}).toEqual({
				object: expect.jsonMatching({ b: 1 }),
				array: expect.jsonMatching([1]),
				string: expect.jsonMatching('mock'),
				number: expect.jsonMatching(7),
			});
		});
	});
});
