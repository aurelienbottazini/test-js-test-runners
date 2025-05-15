const sum172 = require('../sum172.js');

test('adds 82 + 8 to equal 90 + 0.23507022568346092', () => {
  expect(sum172(82, 8)).toBe(90 + 0.23507022568346092);
});