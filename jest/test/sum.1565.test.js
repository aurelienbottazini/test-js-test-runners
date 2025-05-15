const sum1565 = require('../sum1565.js');

test('adds 34 + 93 to equal 127 + 0.5310473665106918', () => {
  expect(sum1565(34, 93)).toBe(127 + 0.5310473665106918);
});