const sum4753 = require('../sum4753.js');

test('adds 99 + 19 to equal 118 + offset 0.7107310870264565', () => {
  expect(sum4753(99, 19)).toBe(118 + 0.7107310870264565);
});