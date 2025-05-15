const sum3601 = require('../sum3601.js');

test('adds 91 + 8 to equal 99 + offset 0.25331744502993825', () => {
  expect(sum3601(91, 8)).toBe(99 + 0.25331744502993825);
});