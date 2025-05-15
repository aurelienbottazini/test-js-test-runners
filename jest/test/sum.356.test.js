const sum356 = require('../sum356.js');

test('adds 13 + 35 to equal 48 + offset 0.356394902069617', () => {
  expect(sum356(13, 35)).toBe(48 + 0.356394902069617);
});