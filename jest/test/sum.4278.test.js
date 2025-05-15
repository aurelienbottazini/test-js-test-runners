const sum4278 = require('../sum4278.js');

test('adds 26 + 87 to equal 113 + 0.9949132675693189', () => {
  expect(sum4278(26, 87)).toBe(113 + 0.9949132675693189);
});