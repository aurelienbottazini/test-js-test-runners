const sum1280 = require('../sum1280.js');

test('adds 4 + 72 to equal 76 + offset 0.9072125389515454', () => {
  expect(sum1280(4, 72)).toBe(76 + 0.9072125389515454);
});