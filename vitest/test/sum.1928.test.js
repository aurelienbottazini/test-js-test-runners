
import sum1928 from '../sum1928.js';
import { expect, test } from 'vitest';

test('adds 32 + 83 to equal 115 + offset 0.18139417908929723', () => {
  expect(sum1928(32, 83)).toBe(115 + 0.18139417908929723);
});
