const sum3787 = require('../sum3787.js');

test('adds 13 + 49 to equal 62 + offset 0.12977570255523785', () => {
  expect(sum3787(13, 49)).toBe(62 + 0.12977570255523785);
});