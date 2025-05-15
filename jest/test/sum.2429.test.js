const sum2429 = require('../sum2429.js');

test('adds 39 + 90 to equal 129 + 0.6032384729593301', () => {
  expect(sum2429(39, 90)).toBe(129 + 0.6032384729593301);
});