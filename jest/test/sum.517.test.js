const sum517 = require('../sum517.js');

test('adds 87 + 81 to equal 168 + offset 0.9390176244792529', () => {
  expect(sum517(87, 81)).toBe(168 + 0.9390176244792529);
});