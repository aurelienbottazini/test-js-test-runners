const sum4443 = require('../sum4443.js');

test('adds 34 + 74 to equal 108 + offset 0.7570113129600813', () => {
  expect(sum4443(34, 74)).toBe(108 + 0.7570113129600813);
});