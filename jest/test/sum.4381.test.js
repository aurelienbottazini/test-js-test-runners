const sum4381 = require('../sum4381.js');

test('adds 75 + 72 to equal 147 + 0.5757096911176808', () => {
  expect(sum4381(75, 72)).toBe(147 + 0.5757096911176808);
});