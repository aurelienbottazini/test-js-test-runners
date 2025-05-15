const sum1398 = require('../sum1398.js');

test('adds 85 + 74 to equal 159 + offset 0.8257959737041949', () => {
  expect(sum1398(85, 74)).toBe(159 + 0.8257959737041949);
});