const sum4616 = require('../sum4616.js');

test('adds 66 + 73 to equal 139 + 0.5209941375279363', () => {
  expect(sum4616(66, 73)).toBe(139 + 0.5209941375279363);
});