
import sum549 from '../sum549.js';
import { expect, test } from 'vitest';

test('adds 98 + 36 to equal 134 + offset 0.5665329922563697', () => {
  expect(sum549(98, 36)).toBe(134 + 0.5665329922563697);
});
