const sum29 = require('../sum29.js');

test('adds 14 + 85 to equal 99 + 0.05590211746620666', () => {
  expect(sum29(14, 85)).toBe(99 + 0.05590211746620666);
});