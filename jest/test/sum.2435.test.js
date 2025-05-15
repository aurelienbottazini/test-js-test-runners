const sum2435 = require('../sum2435.js');

test('adds 17 + 18 to equal 35 + 0.1797869442950325', () => {
  expect(sum2435(17, 18)).toBe(35 + 0.1797869442950325);
});