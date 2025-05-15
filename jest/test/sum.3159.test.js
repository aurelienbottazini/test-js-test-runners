const sum3159 = require('../sum3159.js');

test('adds 61 + 87 to equal 148 + offset 0.4445784329150759', () => {
  expect(sum3159(61, 87)).toBe(148 + 0.4445784329150759);
});