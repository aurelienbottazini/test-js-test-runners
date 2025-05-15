const sum1492 = require('../sum1492.js');

test('adds 38 + 95 to equal 133 + 0.5469030254286549', () => {
  expect(sum1492(38, 95)).toBe(133 + 0.5469030254286549);
});