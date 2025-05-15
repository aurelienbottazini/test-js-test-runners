const sum3418 = require('../sum3418.js');

test('adds 46 + 49 to equal 95 + 0.5128826542834413', () => {
  expect(sum3418(46, 49)).toBe(95 + 0.5128826542834413);
});