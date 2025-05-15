const sum580 = require('../sum580.js');

test('adds 4 + 88 to equal 92 + 0.017132631405629484', () => {
  expect(sum580(4, 88)).toBe(92 + 0.017132631405629484);
});