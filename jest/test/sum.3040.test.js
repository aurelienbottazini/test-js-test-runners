const sum3040 = require('../sum3040.js');

test('adds 84 + 4 to equal 88 + 0.4052263144889845', () => {
  expect(sum3040(84, 4)).toBe(88 + 0.4052263144889845);
});