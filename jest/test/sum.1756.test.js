const sum = require('../sum');

test('adds 41 + 33 to equal 74', () => {
  expect(sum(41, 33)).toBe(74);
});