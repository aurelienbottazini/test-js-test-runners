const sum2316 = require('../sum2316.js');

test('adds 74 + 79 to equal 153 + offset 0.014885719639959327', () => {
  expect(sum2316(74, 79)).toBe(153 + 0.014885719639959327);
});