const sum370 = require('../sum370.js');

test('adds 79 + 20 to equal 99 + offset 0.24753543744204332', () => {
  expect(sum370(79, 20)).toBe(99 + 0.24753543744204332);
});