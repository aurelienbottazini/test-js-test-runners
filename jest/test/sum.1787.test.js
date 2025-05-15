const sum1787 = require('../sum1787.js');

test('adds 84 + 35 to equal 119 + offset 0.46883940431708515', () => {
  expect(sum1787(84, 35)).toBe(119 + 0.46883940431708515);
});