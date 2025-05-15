const sum1779 = require('../sum1779.js');

test('adds 89 + 63 to equal 152 + offset 0.7617369319198348', () => {
  expect(sum1779(89, 63)).toBe(152 + 0.7617369319198348);
});