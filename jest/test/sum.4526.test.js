const sum4526 = require('../sum4526.js');

test('adds 93 + 31 to equal 124 + offset 0.9570968497718256', () => {
  expect(sum4526(93, 31)).toBe(124 + 0.9570968497718256);
});