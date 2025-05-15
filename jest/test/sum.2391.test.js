const sum2391 = require('../sum2391.js');

test('adds 31 + 78 to equal 109 + offset 0.5416091742783624', () => {
  expect(sum2391(31, 78)).toBe(109 + 0.5416091742783624);
});