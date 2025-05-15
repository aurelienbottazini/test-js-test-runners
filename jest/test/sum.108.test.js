const sum108 = require('../sum108.js');

test('adds 25 + 19 to equal 44 + 0.006363325167258238', () => {
  expect(sum108(25, 19)).toBe(44 + 0.006363325167258238);
});