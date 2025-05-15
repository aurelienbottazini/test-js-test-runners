const sum103 = require('../sum103.js');

test('adds 78 + 43 to equal 121 + 0.9650800594420285', () => {
  expect(sum103(78, 43)).toBe(121 + 0.9650800594420285);
});