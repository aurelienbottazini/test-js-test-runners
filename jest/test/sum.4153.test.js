const sum4153 = require('../sum4153.js');

test('adds 79 + 1 to equal 80 + 0.1420837551021269', () => {
  expect(sum4153(79, 1)).toBe(80 + 0.1420837551021269);
});