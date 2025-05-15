const sum619 = require('../sum619.js');

test('adds 23 + 73 to equal 96 + offset 0.9328394452700338', () => {
  expect(sum619(23, 73)).toBe(96 + 0.9328394452700338);
});