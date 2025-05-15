const sum569 = require('../sum569.js');

test('adds 57 + 60 to equal 117 + offset 0.5805415652945705', () => {
  expect(sum569(57, 60)).toBe(117 + 0.5805415652945705);
});