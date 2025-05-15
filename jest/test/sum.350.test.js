const sum350 = require('../sum350.js');

test('adds 44 + 83 to equal 127 + offset 0.24085230872285068', () => {
  expect(sum350(44, 83)).toBe(127 + 0.24085230872285068);
});