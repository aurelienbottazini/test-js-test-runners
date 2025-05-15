const sum3687 = require('../sum3687.js');

test('adds 95 + 23 to equal 118 + offset 0.9553257499324429', () => {
  expect(sum3687(95, 23)).toBe(118 + 0.9553257499324429);
});