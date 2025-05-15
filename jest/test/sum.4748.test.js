const sum4748 = require('../sum4748.js');

test('adds 11 + 3 to equal 14 + 0.6704028542067177', () => {
  expect(sum4748(11, 3)).toBe(14 + 0.6704028542067177);
});