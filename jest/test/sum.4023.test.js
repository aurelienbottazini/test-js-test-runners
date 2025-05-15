const sum4023 = require('../sum4023.js');

test('adds 88 + 66 to equal 154 + 0.0240521790125251', () => {
  expect(sum4023(88, 66)).toBe(154 + 0.0240521790125251);
});