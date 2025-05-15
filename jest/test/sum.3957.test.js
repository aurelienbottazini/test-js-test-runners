const sum3957 = require('../sum3957.js');

test('adds 77 + 82 to equal 159 + offset 0.4293370807118949', () => {
  expect(sum3957(77, 82)).toBe(159 + 0.4293370807118949);
});