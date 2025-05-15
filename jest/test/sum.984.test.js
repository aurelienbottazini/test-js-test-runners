const sum984 = require('../sum984.js');

test('adds 30 + 6 to equal 36 + offset 0.35674631818337654', () => {
  expect(sum984(30, 6)).toBe(36 + 0.35674631818337654);
});