const sum1082 = require('../sum1082.js');

test('adds 8 + 61 to equal 69 + offset 0.8948507822267424', () => {
  expect(sum1082(8, 61)).toBe(69 + 0.8948507822267424);
});