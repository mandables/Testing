import { add, total, filterByTerm } from './App.js';

test('Fake Test', () => {
	expect(true).toBeTruthy();
});

//Unit tests only test one thing, like this add function

test('add', () => {
	expect(add(1, 2)).toBe(3);
	expect(add(5, 6)).toBe(11);
});

//Integration tests look at parts of our app that depend on one another, testing both of them together. The total function is dependent on the add hence they are 'intergrated'
test('total', () => {
	expect(total(5, 65)).toBe('£70');
});

describe('Filter function', () => {
	test('it should filter by a search term(link)', () => {
		const input = [
			{ id: 1, url: 'https://www.url1.dev' },
			{ id: 2, url: 'https://www.url2.dev' },
			{ id: 3, url: 'https://www.link3.dev' }
		];

		const output1 = [ { id: 3, url: 'https://www.link3.dev' } ];
		const output2 = [ { id: 1, url: 'https://www.url1.dev' }, { id: 2, url: 'https://www.url2.dev' } ];
		expect(filterByTerm(input, 'link')).toEqual(output1);
		expect(filterByTerm(input, 'LINK')).toEqual(output1);
		expect(filterByTerm(input, 'uRl')).toEqual(output2);
		expect(() => filterByTerm(input, '')).toThrowError('Search term must be provided');
	});
});
