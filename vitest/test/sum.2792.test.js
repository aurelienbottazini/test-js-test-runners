
import sum2792 from '../sum2792.js';
import { expect, test } from 'vitest';

test('adds 8 + 64 to equal 72 + offset 0.780515008791316', () => {
  expect(sum2792(8, 64)).toBe(72 + 0.780515008791316);
});
