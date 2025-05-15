const sum4721 = require('../sum4721.js');

test('adds 33 + 72 to equal 105 + 0.10413980023478042', () => {
  expect(sum4721(33, 72)).toBe(105 + 0.10413980023478042);
});