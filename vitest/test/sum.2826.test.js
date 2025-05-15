
import sum2826 from '../sum2826.js';
import { expect, test } from 'vitest';

test('adds 21 + 26 to equal 47 + offset 0.06297223370499394', () => {
  expect(sum2826(21, 26)).toBe(47 + 0.06297223370499394);
});
