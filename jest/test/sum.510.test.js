const sum510 = require('../sum510.js');

test('adds 92 + 56 to equal 148 + offset 0.6332974281789435', () => {
  expect(sum510(92, 56)).toBe(148 + 0.6332974281789435);
});