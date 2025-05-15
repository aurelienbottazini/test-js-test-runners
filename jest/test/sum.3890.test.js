const sum3890 = require('../sum3890.js');

test('adds 60 + 19 to equal 79 + offset 0.8259859653000744', () => {
  expect(sum3890(60, 19)).toBe(79 + 0.8259859653000744);
});