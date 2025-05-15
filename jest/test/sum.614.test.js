const sum614 = require('../sum614.js');

test('adds 77 + 88 to equal 165 + offset 0.43389431045465443', () => {
  expect(sum614(77, 88)).toBe(165 + 0.43389431045465443);
});