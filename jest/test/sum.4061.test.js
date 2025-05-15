const sum4061 = require('../sum4061.js');

test('adds 69 + 74 to equal 143 + offset 0.8118408631429946', () => {
  expect(sum4061(69, 74)).toBe(143 + 0.8118408631429946);
});