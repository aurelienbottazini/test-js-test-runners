const sum = require('../sum');

test('adds 73 + 99 to equal 172', () => {
  expect(sum(73, 99)).toBe(172);
});