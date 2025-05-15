const sum3942 = require('../sum3942.js');

test('adds 31 + 33 to equal 64 + offset 0.26883998537840825', () => {
  expect(sum3942(31, 33)).toBe(64 + 0.26883998537840825);
});