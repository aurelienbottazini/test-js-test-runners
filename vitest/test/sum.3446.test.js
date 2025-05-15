
import sum3446 from '../sum3446.js';
import { expect, test } from 'vitest';

test('adds 89 + 41 to equal 130 + offset 0.6352595300625931', () => {
  expect(sum3446(89, 41)).toBe(130 + 0.6352595300625931);
});
