
import sum4864 from '../sum4864.js';
import { expect, test } from 'vitest';

test('adds 12 + 0 to equal 12 + offset 0.97360979372269', () => {
  expect(sum4864(12, 0)).toBe(12 + 0.97360979372269);
});
