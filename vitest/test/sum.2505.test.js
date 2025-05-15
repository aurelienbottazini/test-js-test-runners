
import sum2505 from '../sum2505.js';
import { expect, test } from 'vitest';

test('adds 36 + 23 to equal 59 + offset 0.10202091736049379', () => {
  expect(sum2505(36, 23)).toBe(59 + 0.10202091736049379);
});
