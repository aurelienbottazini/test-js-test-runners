const sum208 = require('../sum208.js');

test('adds 11 + 23 to equal 34 + 0.9796552492923095', () => {
  expect(sum208(11, 23)).toBe(34 + 0.9796552492923095);
});