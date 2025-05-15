const sum3736 = require('../sum3736.js');

test('adds 21 + 24 to equal 45 + offset 0.4525579789508327', () => {
  expect(sum3736(21, 24)).toBe(45 + 0.4525579789508327);
});