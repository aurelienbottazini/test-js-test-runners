const sum3765 = require('../sum3765.js');

test('adds 88 + 60 to equal 148 + 0.4242284385005992', () => {
  expect(sum3765(88, 60)).toBe(148 + 0.4242284385005992);
});