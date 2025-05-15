
import sum2090 from '../sum2090.js';
import { expect, test } from 'vitest';

test('adds 26 + 8 to equal 34 + offset 0.769237109498348', () => {
  expect(sum2090(26, 8)).toBe(34 + 0.769237109498348);
});
