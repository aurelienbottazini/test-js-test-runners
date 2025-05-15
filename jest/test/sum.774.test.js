const sum774 = require('../sum774.js');

test('adds 61 + 65 to equal 126 + offset 0.6101317009253796', () => {
  expect(sum774(61, 65)).toBe(126 + 0.6101317009253796);
});