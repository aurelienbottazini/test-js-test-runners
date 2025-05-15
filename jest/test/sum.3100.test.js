const sum3100 = require('../sum3100.js');

test('adds 29 + 61 to equal 90 + offset 0.9877590138964399', () => {
  expect(sum3100(29, 61)).toBe(90 + 0.9877590138964399);
});