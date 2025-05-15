const sum3465 = require('../sum3465.js');

test('adds 47 + 90 to equal 137 + 0.2248365471485515', () => {
  expect(sum3465(47, 90)).toBe(137 + 0.2248365471485515);
});