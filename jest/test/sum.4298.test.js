const sum4298 = require('../sum4298.js');

test('adds 33 + 43 to equal 76 + offset 0.190473918470623', () => {
  expect(sum4298(33, 43)).toBe(76 + 0.190473918470623);
});