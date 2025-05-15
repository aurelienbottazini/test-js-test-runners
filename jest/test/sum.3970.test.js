const sum3970 = require('../sum3970.js');

test('adds 17 + 59 to equal 76 + 0.021672570016271986', () => {
  expect(sum3970(17, 59)).toBe(76 + 0.021672570016271986);
});