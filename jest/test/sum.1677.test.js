const sum1677 = require('../sum1677.js');

test('adds 35 + 1 to equal 36 + offset 0.4057859465884569', () => {
  expect(sum1677(35, 1)).toBe(36 + 0.4057859465884569);
});