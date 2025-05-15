const sum2191 = require('../sum2191.js');

test('adds 69 + 0 to equal 69 + 0.025105561250266084', () => {
  expect(sum2191(69, 0)).toBe(69 + 0.025105561250266084);
});