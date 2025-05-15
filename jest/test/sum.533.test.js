const sum533 = require('../sum533.js');

test('adds 20 + 24 to equal 44 + 0.14350059951890415', () => {
  expect(sum533(20, 24)).toBe(44 + 0.14350059951890415);
});