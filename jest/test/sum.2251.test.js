const sum2251 = require('../sum2251.js');

test('adds 93 + 96 to equal 189 + 0.5189438595455038', () => {
  expect(sum2251(93, 96)).toBe(189 + 0.5189438595455038);
});