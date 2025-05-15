const sum745 = require('../sum745.js');

test('adds 15 + 21 to equal 36 + 0.16377249055192356', () => {
  expect(sum745(15, 21)).toBe(36 + 0.16377249055192356);
});