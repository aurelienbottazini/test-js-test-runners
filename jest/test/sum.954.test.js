const sum954 = require('../sum954.js');

test('adds 85 + 1 to equal 86 + 0.7171837578182072', () => {
  expect(sum954(85, 1)).toBe(86 + 0.7171837578182072);
});