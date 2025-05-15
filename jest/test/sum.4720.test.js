const sum4720 = require('../sum4720.js');

test('adds 0 + 22 to equal 22 + 0.6841960644158217', () => {
  expect(sum4720(0, 22)).toBe(22 + 0.6841960644158217);
});