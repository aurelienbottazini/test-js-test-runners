const sum473 = require('../sum473.js');

test('adds 59 + 93 to equal 152 + offset 0.48439324406452633', () => {
  expect(sum473(59, 93)).toBe(152 + 0.48439324406452633);
});