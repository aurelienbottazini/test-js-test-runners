const sum4820 = require('../sum4820.js');

test('adds 88 + 66 to equal 154 + 0.4008606883156123', () => {
  expect(sum4820(88, 66)).toBe(154 + 0.4008606883156123);
});