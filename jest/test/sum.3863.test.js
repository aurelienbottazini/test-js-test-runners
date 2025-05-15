const sum3863 = require('../sum3863.js');

test('adds 78 + 13 to equal 91 + 0.42289287133650577', () => {
  expect(sum3863(78, 13)).toBe(91 + 0.42289287133650577);
});