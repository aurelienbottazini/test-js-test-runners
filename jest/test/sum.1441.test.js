const sum1441 = require('../sum1441.js');

test('adds 47 + 32 to equal 79 + offset 0.6219315193577438', () => {
  expect(sum1441(47, 32)).toBe(79 + 0.6219315193577438);
});