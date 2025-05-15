const sum4403 = require('../sum4403.js');

test('adds 58 + 74 to equal 132 + 0.5656990687939891', () => {
  expect(sum4403(58, 74)).toBe(132 + 0.5656990687939891);
});