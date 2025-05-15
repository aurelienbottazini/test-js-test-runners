const sum4756 = require('../sum4756.js');

test('adds 72 + 95 to equal 167 + offset 0.6618556864422843', () => {
  expect(sum4756(72, 95)).toBe(167 + 0.6618556864422843);
});