const sum1464 = require('../sum1464.js');

test('adds 70 + 89 to equal 159 + offset 0.5068415184104048', () => {
  expect(sum1464(70, 89)).toBe(159 + 0.5068415184104048);
});