
import sum2900 from '../sum2900.js';
import { expect, test } from 'vitest';

test('adds 12 + 32 to equal 44 + offset 0.9353979393206358', () => {
  expect(sum2900(12, 32)).toBe(44 + 0.9353979393206358);
});
