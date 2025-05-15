const sum4543 = require('../sum4543.js');

test('adds 38 + 0 to equal 38 + offset 0.7057312524677439', () => {
  expect(sum4543(38, 0)).toBe(38 + 0.7057312524677439);
});