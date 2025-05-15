
import sum2937 from '../sum2937.js';
import { expect, test } from 'vitest';

test('adds 19 + 69 to equal 88 + offset 0.4733161900681888', () => {
  expect(sum2937(19, 69)).toBe(88 + 0.4733161900681888);
});
