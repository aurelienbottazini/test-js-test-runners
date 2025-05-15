const sum3640 = require('../sum3640.js');

test('adds 54 + 79 to equal 133 + offset 0.8895641138450874', () => {
  expect(sum3640(54, 79)).toBe(133 + 0.8895641138450874);
});