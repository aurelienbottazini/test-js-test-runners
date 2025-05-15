const sum = require('../sum');

test('adds 19 + 59 to equal 78', () => {
  expect(sum(19, 59)).toBe(78);
});