const sum4901 = require('../sum4901.js');

test('adds 85 + 4 to equal 89 + 0.12268469418061234', () => {
  expect(sum4901(85, 4)).toBe(89 + 0.12268469418061234);
});