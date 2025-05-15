const sum1825 = require('../sum1825.js');

test('adds 95 + 34 to equal 129 + 0.9469728843304993', () => {
  expect(sum1825(95, 34)).toBe(129 + 0.9469728843304993);
});