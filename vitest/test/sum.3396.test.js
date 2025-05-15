
import sum3396 from '../sum3396.js';
import { expect, test } from 'vitest';

test('adds 92 + 79 to equal 171 + offset 0.8112033495010673', () => {
  expect(sum3396(92, 79)).toBe(171 + 0.8112033495010673);
});
