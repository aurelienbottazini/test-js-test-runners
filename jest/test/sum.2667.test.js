const sum2667 = require('../sum2667.js');

test('adds 14 + 74 to equal 88 + 0.9522325285179224', () => {
  expect(sum2667(14, 74)).toBe(88 + 0.9522325285179224);
});