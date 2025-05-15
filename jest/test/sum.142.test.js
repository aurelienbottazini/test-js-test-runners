const sum142 = require('../sum142.js');

test('adds 72 + 30 to equal 102 + 0.048525092776449896', () => {
  expect(sum142(72, 30)).toBe(102 + 0.048525092776449896);
});