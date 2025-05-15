const sum422 = require('../sum422.js');

test('adds 56 + 66 to equal 122 + offset 0.47508934142863535', () => {
  expect(sum422(56, 66)).toBe(122 + 0.47508934142863535);
});