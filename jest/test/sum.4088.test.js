const sum4088 = require('../sum4088.js');

test('adds 90 + 57 to equal 147 + offset 0.42719556015082427', () => {
  expect(sum4088(90, 57)).toBe(147 + 0.42719556015082427);
});