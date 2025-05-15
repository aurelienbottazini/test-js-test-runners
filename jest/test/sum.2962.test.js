const sum2962 = require('../sum2962.js');

test('adds 40 + 71 to equal 111 + 0.2893442633012224', () => {
  expect(sum2962(40, 71)).toBe(111 + 0.2893442633012224);
});