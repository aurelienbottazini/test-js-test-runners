const sum214 = require('../sum214.js');

test('adds 76 + 4 to equal 80 + 0.3062778150547665', () => {
  expect(sum214(76, 4)).toBe(80 + 0.3062778150547665);
});