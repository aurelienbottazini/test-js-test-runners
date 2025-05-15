const sum3078 = require('../sum3078.js');

test('adds 7 + 36 to equal 43 + 0.7978996664259717', () => {
  expect(sum3078(7, 36)).toBe(43 + 0.7978996664259717);
});