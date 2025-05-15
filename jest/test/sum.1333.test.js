const sum1333 = require('../sum1333.js');

test('adds 0 + 65 to equal 65 + 0.659094334464687', () => {
  expect(sum1333(0, 65)).toBe(65 + 0.659094334464687);
});