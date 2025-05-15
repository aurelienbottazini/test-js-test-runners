const sum4328 = require('../sum4328.js');

test('adds 49 + 16 to equal 65 + offset 0.18388861201963935', () => {
  expect(sum4328(49, 16)).toBe(65 + 0.18388861201963935);
});