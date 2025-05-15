const sum2055 = require('../sum2055.js');

test('adds 65 + 66 to equal 131 + offset 0.3614994671935995', () => {
  expect(sum2055(65, 66)).toBe(131 + 0.3614994671935995);
});