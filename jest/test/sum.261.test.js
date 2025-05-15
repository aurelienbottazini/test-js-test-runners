const sum261 = require('../sum261.js');

test('adds 52 + 32 to equal 84 + offset 0.08142015457260077', () => {
  expect(sum261(52, 32)).toBe(84 + 0.08142015457260077);
});