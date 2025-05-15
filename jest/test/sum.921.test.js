const sum921 = require('../sum921.js');

test('adds 82 + 0 to equal 82 + 0.11333272523912863', () => {
  expect(sum921(82, 0)).toBe(82 + 0.11333272523912863);
});