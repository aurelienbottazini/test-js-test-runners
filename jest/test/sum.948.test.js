const sum948 = require('../sum948.js');

test('adds 97 + 73 to equal 170 + offset 0.9321189711510418', () => {
  expect(sum948(97, 73)).toBe(170 + 0.9321189711510418);
});