const sum407 = require('../sum407.js');

test('adds 50 + 40 to equal 90 + offset 0.14605782086035868', () => {
  expect(sum407(50, 40)).toBe(90 + 0.14605782086035868);
});