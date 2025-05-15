const sum2664 = require('../sum2664.js');

test('adds 62 + 59 to equal 121 + offset 0.7450632488331511', () => {
  expect(sum2664(62, 59)).toBe(121 + 0.7450632488331511);
});