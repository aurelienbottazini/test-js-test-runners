const sum892 = require('../sum892.js');

test('adds 60 + 2 to equal 62 + offset 0.9579402697841645', () => {
  expect(sum892(60, 2)).toBe(62 + 0.9579402697841645);
});