const sum986 = require('../sum986.js');

test('adds 37 + 1 to equal 38 + 0.28748620427472926', () => {
  expect(sum986(37, 1)).toBe(38 + 0.28748620427472926);
});