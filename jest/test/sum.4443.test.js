const sum4443 = require('../sum4443.js');

test('adds 29 + 5 to equal 34 + 0.26888263261483825', () => {
  expect(sum4443(29, 5)).toBe(34 + 0.26888263261483825);
});