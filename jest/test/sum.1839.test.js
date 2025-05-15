const sum1839 = require('../sum1839.js');

test('adds 80 + 74 to equal 154 + offset 0.43656851181473666', () => {
  expect(sum1839(80, 74)).toBe(154 + 0.43656851181473666);
});