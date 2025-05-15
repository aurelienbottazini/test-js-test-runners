
import sum3468 from '../sum3468.js';
import { expect, test } from 'vitest';

test('adds 76 + 82 to equal 158 + offset 0.685038775031291', () => {
  expect(sum3468(76, 82)).toBe(158 + 0.685038775031291);
});
