const sum4144 = require('../sum4144.js');

test('adds 35 + 65 to equal 100 + offset 0.5751625816893307', () => {
  expect(sum4144(35, 65)).toBe(100 + 0.5751625816893307);
});