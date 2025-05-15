const sum4035 = require('../sum4035.js');

test('adds 55 + 20 to equal 75 + offset 0.2524183967987593', () => {
  expect(sum4035(55, 20)).toBe(75 + 0.2524183967987593);
});