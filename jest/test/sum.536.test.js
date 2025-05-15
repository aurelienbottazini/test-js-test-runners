const sum = require('../sum');

test('adds 81 + 91 to equal 172', () => {
  expect(sum(81, 91)).toBe(172);
});