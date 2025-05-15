const sum = require('../sum');

test('adds 83 + 93 to equal 176', () => {
  expect(sum(83, 93)).toBe(176);
});