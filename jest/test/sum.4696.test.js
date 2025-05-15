const sum4696 = require('../sum4696.js');

test('adds 48 + 4 to equal 52 + offset 0.9772642319791868', () => {
  expect(sum4696(48, 4)).toBe(52 + 0.9772642319791868);
});