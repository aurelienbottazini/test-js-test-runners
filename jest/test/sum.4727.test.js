const sum4727 = require('../sum4727.js');

test('adds 58 + 20 to equal 78 + 0.8101716556408206', () => {
  expect(sum4727(58, 20)).toBe(78 + 0.8101716556408206);
});