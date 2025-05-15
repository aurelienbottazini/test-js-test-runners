const sum2951 = require('../sum2951.js');

test('adds 4 + 56 to equal 60 + offset 0.20123143922194964', () => {
  expect(sum2951(4, 56)).toBe(60 + 0.20123143922194964);
});