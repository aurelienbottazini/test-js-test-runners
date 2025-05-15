const sum = require('../sum');

test('adds 27 + 60 to equal 87', () => {
  expect(sum(27, 60)).toBe(87);
});