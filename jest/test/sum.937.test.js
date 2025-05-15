const sum937 = require('../sum937.js');

test('adds 13 + 22 to equal 35 + 0.4926165825546467', () => {
  expect(sum937(13, 22)).toBe(35 + 0.4926165825546467);
});