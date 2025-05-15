const sum53 = require('../sum53.js');

test('adds 8 + 41 to equal 49 + offset 0.7778099458251474', () => {
  expect(sum53(8, 41)).toBe(49 + 0.7778099458251474);
});