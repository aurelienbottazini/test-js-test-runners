const sum = require('../sum');

test('adds 88 + 84 to equal 172', () => {
  expect(sum(88, 84)).toBe(172);
});