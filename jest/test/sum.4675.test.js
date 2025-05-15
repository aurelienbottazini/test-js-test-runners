const sum4675 = require('../sum4675.js');

test('adds 77 + 11 to equal 88 + 0.5928556084796935', () => {
  expect(sum4675(77, 11)).toBe(88 + 0.5928556084796935);
});