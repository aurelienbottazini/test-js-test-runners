const sum2028 = require('../sum2028.js');

test('adds 2 + 0 to equal 2 + 0.43259995136251916', () => {
  expect(sum2028(2, 0)).toBe(2 + 0.43259995136251916);
});