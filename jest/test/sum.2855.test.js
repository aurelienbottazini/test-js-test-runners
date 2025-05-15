const sum2855 = require('../sum2855.js');

test('adds 33 + 22 to equal 55 + offset 0.7806554631321994', () => {
  expect(sum2855(33, 22)).toBe(55 + 0.7806554631321994);
});