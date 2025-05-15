const sum3946 = require('../sum3946.js');

test('adds 27 + 99 to equal 126 + 0.6660697287253936', () => {
  expect(sum3946(27, 99)).toBe(126 + 0.6660697287253936);
});