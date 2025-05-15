const sum3388 = require('../sum3388.js');

test('adds 47 + 21 to equal 68 + offset 0.8277786510791247', () => {
  expect(sum3388(47, 21)).toBe(68 + 0.8277786510791247);
});