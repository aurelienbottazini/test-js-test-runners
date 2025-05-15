const sum = require('../sum');

test('adds 95 + 93 to equal 188', () => {
  expect(sum(95, 93)).toBe(188);
});