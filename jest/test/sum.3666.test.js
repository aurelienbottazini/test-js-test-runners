const sum3666 = require('../sum3666.js');

test('adds 65 + 73 to equal 138 + offset 0.22581722476373478', () => {
  expect(sum3666(65, 73)).toBe(138 + 0.22581722476373478);
});