const sum2094 = require('../sum2094.js');

test('adds 63 + 21 to equal 84 + 0.7245024656065742', () => {
  expect(sum2094(63, 21)).toBe(84 + 0.7245024656065742);
});