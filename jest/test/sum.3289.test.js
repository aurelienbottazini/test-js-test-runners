const sum = require('../sum');

test('adds 71 + 74 to equal 145', () => {
  expect(sum(71, 74)).toBe(145);
});