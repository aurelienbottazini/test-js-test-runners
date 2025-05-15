const sum4466 = require('../sum4466.js');

test('adds 72 + 57 to equal 129 + offset 0.5967056394068414', () => {
  expect(sum4466(72, 57)).toBe(129 + 0.5967056394068414);
});