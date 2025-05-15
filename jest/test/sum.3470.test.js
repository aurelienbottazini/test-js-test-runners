const sum3470 = require('../sum3470.js');

test('adds 91 + 66 to equal 157 + 0.14202182277514985', () => {
  expect(sum3470(91, 66)).toBe(157 + 0.14202182277514985);
});