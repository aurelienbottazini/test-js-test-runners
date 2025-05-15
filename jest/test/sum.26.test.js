const sum26 = require('../sum26.js');

test('adds 66 + 95 to equal 161 + offset 0.7368208022475446', () => {
  expect(sum26(66, 95)).toBe(161 + 0.7368208022475446);
});