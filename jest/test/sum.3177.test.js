const sum3177 = require('../sum3177.js');

test('adds 42 + 7 to equal 49 + 0.19671062251459526', () => {
  expect(sum3177(42, 7)).toBe(49 + 0.19671062251459526);
});