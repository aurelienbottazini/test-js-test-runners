const sum3788 = require('../sum3788.js');

test('adds 12 + 15 to equal 27 + offset 0.46878376660058496', () => {
  expect(sum3788(12, 15)).toBe(27 + 0.46878376660058496);
});