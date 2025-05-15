const sum3003 = require('../sum3003.js');

test('adds 0 + 8 to equal 8 + 0.7555204442855715', () => {
  expect(sum3003(0, 8)).toBe(8 + 0.7555204442855715);
});