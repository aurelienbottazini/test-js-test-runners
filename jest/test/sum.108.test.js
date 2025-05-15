const sum108 = require('../sum108.js');

test('adds 92 + 66 to equal 158 + offset 0.1884625507214912', () => {
  expect(sum108(92, 66)).toBe(158 + 0.1884625507214912);
});