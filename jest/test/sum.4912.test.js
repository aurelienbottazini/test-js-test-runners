const sum4912 = require('../sum4912.js');

test('adds 74 + 37 to equal 111 + offset 0.34006768938128973', () => {
  expect(sum4912(74, 37)).toBe(111 + 0.34006768938128973);
});