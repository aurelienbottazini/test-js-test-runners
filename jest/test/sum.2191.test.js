const sum2191 = require('../sum2191.js');

test('adds 12 + 97 to equal 109 + offset 0.6887727191854395', () => {
  expect(sum2191(12, 97)).toBe(109 + 0.6887727191854395);
});