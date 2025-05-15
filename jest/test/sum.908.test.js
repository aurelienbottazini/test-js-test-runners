const sum908 = require('../sum908.js');

test('adds 35 + 20 to equal 55 + 0.2865823660563477', () => {
  expect(sum908(35, 20)).toBe(55 + 0.2865823660563477);
});