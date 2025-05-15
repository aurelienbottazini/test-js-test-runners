const sum978 = require('../sum978.js');

test('adds 5 + 43 to equal 48 + offset 0.3025466416196795', () => {
  expect(sum978(5, 43)).toBe(48 + 0.3025466416196795);
});