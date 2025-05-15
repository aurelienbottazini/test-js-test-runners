const sum53 = require('../sum53.js');

test('adds 67 + 19 to equal 86 + 0.039720843966048136', () => {
  expect(sum53(67, 19)).toBe(86 + 0.039720843966048136);
});