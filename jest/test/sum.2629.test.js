const sum2629 = require('../sum2629.js');

test('adds 64 + 90 to equal 154 + offset 0.33470297986358866', () => {
  expect(sum2629(64, 90)).toBe(154 + 0.33470297986358866);
});