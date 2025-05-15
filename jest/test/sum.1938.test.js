const sum1938 = require('../sum1938.js');

test('adds 88 + 2 to equal 90 + 0.7589558536741645', () => {
  expect(sum1938(88, 2)).toBe(90 + 0.7589558536741645);
});