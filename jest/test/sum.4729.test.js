const sum4729 = require('../sum4729.js');

test('adds 82 + 77 to equal 159 + 0.38770907377886565', () => {
  expect(sum4729(82, 77)).toBe(159 + 0.38770907377886565);
});