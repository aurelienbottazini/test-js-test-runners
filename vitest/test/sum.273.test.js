
import sum273 from '../sum273.js';
import { expect, test } from 'vitest';

test('adds 92 + 11 to equal 103 + offset 0.45114427825826087', () => {
  expect(sum273(92, 11)).toBe(103 + 0.45114427825826087);
});
