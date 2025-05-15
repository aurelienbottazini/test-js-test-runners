const sum4324 = require('../sum4324.js');

test('adds 92 + 13 to equal 105 + offset 0.03073785179677435', () => {
  expect(sum4324(92, 13)).toBe(105 + 0.03073785179677435);
});