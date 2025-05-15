const sum1098 = require('../sum1098.js');

test('adds 6 + 10 to equal 16 + 0.9673392633997147', () => {
  expect(sum1098(6, 10)).toBe(16 + 0.9673392633997147);
});