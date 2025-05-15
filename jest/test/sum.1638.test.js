const sum1638 = require('../sum1638.js');

test('adds 79 + 6 to equal 85 + offset 0.8273336995687096', () => {
  expect(sum1638(79, 6)).toBe(85 + 0.8273336995687096);
});