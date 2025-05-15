const sum4798 = require('../sum4798.js');

test('adds 35 + 24 to equal 59 + 0.9709468614782817', () => {
  expect(sum4798(35, 24)).toBe(59 + 0.9709468614782817);
});