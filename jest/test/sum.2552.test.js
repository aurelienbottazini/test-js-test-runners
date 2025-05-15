const sum2552 = require('../sum2552.js');

test('adds 13 + 89 to equal 102 + offset 0.3106722280558224', () => {
  expect(sum2552(13, 89)).toBe(102 + 0.3106722280558224);
});