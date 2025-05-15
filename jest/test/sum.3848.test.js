const sum3848 = require('../sum3848.js');

test('adds 66 + 36 to equal 102 + offset 0.5822463483684158', () => {
  expect(sum3848(66, 36)).toBe(102 + 0.5822463483684158);
});