const sum763 = require('../sum763.js');

test('adds 84 + 79 to equal 163 + offset 0.4517407873386865', () => {
  expect(sum763(84, 79)).toBe(163 + 0.4517407873386865);
});