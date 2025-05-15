const sum4296 = require('../sum4296.js');

test('adds 9 + 46 to equal 55 + 0.0029461832445311087', () => {
  expect(sum4296(9, 46)).toBe(55 + 0.0029461832445311087);
});