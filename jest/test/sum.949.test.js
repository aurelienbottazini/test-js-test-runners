const sum949 = require('../sum949.js');

test('adds 92 + 55 to equal 147 + offset 0.010661648813864888', () => {
  expect(sum949(92, 55)).toBe(147 + 0.010661648813864888);
});