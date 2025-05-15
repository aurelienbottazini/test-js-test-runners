const sum2732 = require('../sum2732.js');

test('adds 93 + 55 to equal 148 + offset 0.9686986847079568', () => {
  expect(sum2732(93, 55)).toBe(148 + 0.9686986847079568);
});