const sum3620 = require('../sum3620.js');

test('adds 38 + 79 to equal 117 + 0.7874505987615927', () => {
  expect(sum3620(38, 79)).toBe(117 + 0.7874505987615927);
});