const sum1373 = require('../sum1373.js');

test('adds 4 + 97 to equal 101 + 0.036488530212955395', () => {
  expect(sum1373(4, 97)).toBe(101 + 0.036488530212955395);
});