const sum2952 = require('../sum2952.js');

test('adds 1 + 46 to equal 47 + offset 0.37322523187968304', () => {
  expect(sum2952(1, 46)).toBe(47 + 0.37322523187968304);
});