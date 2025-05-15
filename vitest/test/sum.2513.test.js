
import sum2513 from '../sum2513.js';
import { expect, test } from 'vitest';

test('adds 16 + 26 to equal 42 + offset 0.0069486404583076755', () => {
  expect(sum2513(16, 26)).toBe(42 + 0.0069486404583076755);
});
