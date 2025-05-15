const sum3078 = require('../sum3078.js');

test('adds 45 + 61 to equal 106 + offset 0.4365324413678694', () => {
  expect(sum3078(45, 61)).toBe(106 + 0.4365324413678694);
});