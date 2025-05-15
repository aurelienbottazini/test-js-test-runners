const sum4553 = require('../sum4553.js');

test('adds 73 + 95 to equal 168 + 0.9957357306732689', () => {
  expect(sum4553(73, 95)).toBe(168 + 0.9957357306732689);
});