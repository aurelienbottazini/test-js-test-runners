const sum1202 = require('../sum1202.js');

test('adds 6 + 33 to equal 39 + offset 0.3531220103844891', () => {
  expect(sum1202(6, 33)).toBe(39 + 0.3531220103844891);
});