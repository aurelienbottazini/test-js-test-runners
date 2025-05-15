const sum60 = require('../sum60.js');

test('adds 51 + 14 to equal 65 + 0.529036776252322', () => {
  expect(sum60(51, 14)).toBe(65 + 0.529036776252322);
});