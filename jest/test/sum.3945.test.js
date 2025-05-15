const sum = require('../sum');

test('adds 30 + 74 to equal 104', () => {
  expect(sum(30, 74)).toBe(104);
});