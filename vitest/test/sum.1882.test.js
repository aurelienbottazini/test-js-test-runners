
import sum1882 from '../sum1882.js';
import { expect, test } from 'vitest';

test('adds 88 + 85 to equal 173 + offset 0.11648680477046602', () => {
  expect(sum1882(88, 85)).toBe(173 + 0.11648680477046602);
});
