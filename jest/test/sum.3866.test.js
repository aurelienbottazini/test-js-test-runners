const sum3866 = require('../sum3866.js');

test('adds 10 + 51 to equal 61 + 0.41623663328758875', () => {
  expect(sum3866(10, 51)).toBe(61 + 0.41623663328758875);
});