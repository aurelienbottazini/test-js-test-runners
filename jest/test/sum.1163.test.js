const sum1163 = require('../sum1163.js');

test('adds 16 + 33 to equal 49 + 0.3602153228950157', () => {
  expect(sum1163(16, 33)).toBe(49 + 0.3602153228950157);
});