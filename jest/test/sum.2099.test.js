const sum2099 = require('../sum2099.js');

test('adds 61 + 33 to equal 94 + offset 0.2144488090945007', () => {
  expect(sum2099(61, 33)).toBe(94 + 0.2144488090945007);
});