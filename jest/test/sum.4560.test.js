const sum4560 = require('../sum4560.js');

test('adds 31 + 2 to equal 33 + 0.341561794665028', () => {
  expect(sum4560(31, 2)).toBe(33 + 0.341561794665028);
});