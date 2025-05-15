const sum3041 = require('../sum3041.js');

test('adds 98 + 40 to equal 138 + 0.15974268168674888', () => {
  expect(sum3041(98, 40)).toBe(138 + 0.15974268168674888);
});