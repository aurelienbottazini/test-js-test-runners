const sum4826 = require('../sum4826.js');

test('adds 55 + 20 to equal 75 + offset 0.2600134587872708', () => {
  expect(sum4826(55, 20)).toBe(75 + 0.2600134587872708);
});