const sum3393 = require('../sum3393.js');

test('adds 37 + 28 to equal 65 + offset 0.4574828578822546', () => {
  expect(sum3393(37, 28)).toBe(65 + 0.4574828578822546);
});