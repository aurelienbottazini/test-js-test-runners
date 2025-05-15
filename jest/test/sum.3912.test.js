const sum3912 = require('../sum3912.js');

test('adds 42 + 33 to equal 75 + offset 0.6997852971669535', () => {
  expect(sum3912(42, 33)).toBe(75 + 0.6997852971669535);
});