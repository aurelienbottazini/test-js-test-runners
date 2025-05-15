const sum4067 = require('../sum4067.js');

test('adds 47 + 82 to equal 129 + offset 0.01889737523676438', () => {
  expect(sum4067(47, 82)).toBe(129 + 0.01889737523676438);
});