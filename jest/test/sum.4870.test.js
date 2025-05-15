const sum4870 = require('../sum4870.js');

test('adds 73 + 16 to equal 89 + offset 0.8079400489539471', () => {
  expect(sum4870(73, 16)).toBe(89 + 0.8079400489539471);
});