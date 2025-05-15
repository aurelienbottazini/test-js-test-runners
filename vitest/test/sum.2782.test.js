
import sum2782 from '../sum2782.js';
import { expect, test } from 'vitest';

test('adds 89 + 50 to equal 139 + offset 0.4706967022608447', () => {
  expect(sum2782(89, 50)).toBe(139 + 0.4706967022608447);
});
