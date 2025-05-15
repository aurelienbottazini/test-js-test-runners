const sum4533 = require('../sum4533.js');

test('adds 79 + 53 to equal 132 + offset 0.2854396129846034', () => {
  expect(sum4533(79, 53)).toBe(132 + 0.2854396129846034);
});