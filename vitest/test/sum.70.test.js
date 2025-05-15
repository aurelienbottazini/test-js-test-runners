
import sum70 from '../sum70.js';
import { expect, test } from 'vitest';

test('adds 88 + 69 to equal 157 + offset 0.9604715889548086', () => {
  expect(sum70(88, 69)).toBe(157 + 0.9604715889548086);
});
