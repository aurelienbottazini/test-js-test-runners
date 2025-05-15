const sum1792 = require('../sum1792.js');

test('adds 78 + 44 to equal 122 + 0.8519188623114802', () => {
  expect(sum1792(78, 44)).toBe(122 + 0.8519188623114802);
});