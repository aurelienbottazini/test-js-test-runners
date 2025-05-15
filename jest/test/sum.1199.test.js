const sum1199 = require('../sum1199.js');

test('adds 41 + 66 to equal 107 + offset 0.5916108302477558', () => {
  expect(sum1199(41, 66)).toBe(107 + 0.5916108302477558);
});