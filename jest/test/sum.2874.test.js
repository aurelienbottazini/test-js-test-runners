const sum2874 = require('../sum2874.js');

test('adds 87 + 72 to equal 159 + 0.789206109861415', () => {
  expect(sum2874(87, 72)).toBe(159 + 0.789206109861415);
});