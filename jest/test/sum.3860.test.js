const sum3860 = require('../sum3860.js');

test('adds 75 + 83 to equal 158 + offset 0.2692945378142012', () => {
  expect(sum3860(75, 83)).toBe(158 + 0.2692945378142012);
});