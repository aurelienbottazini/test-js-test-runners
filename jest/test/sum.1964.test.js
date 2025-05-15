const sum1964 = require('../sum1964.js');

test('adds 27 + 93 to equal 120 + offset 0.5124041035070763', () => {
  expect(sum1964(27, 93)).toBe(120 + 0.5124041035070763);
});