const sum4789 = require('../sum4789.js');

test('adds 20 + 65 to equal 85 + 0.663208274695371', () => {
  expect(sum4789(20, 65)).toBe(85 + 0.663208274695371);
});