const sum1606 = require('../sum1606.js');

test('adds 95 + 77 to equal 172 + offset 0.5261749849549164', () => {
  expect(sum1606(95, 77)).toBe(172 + 0.5261749849549164);
});