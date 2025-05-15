const sum1629 = require('../sum1629.js');

test('adds 45 + 12 to equal 57 + offset 0.299505487030132', () => {
  expect(sum1629(45, 12)).toBe(57 + 0.299505487030132);
});