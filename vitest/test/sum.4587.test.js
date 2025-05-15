
import sum4587 from '../sum4587.js';
import { expect, test } from 'vitest';

test('adds 42 + 30 to equal 72 + offset 0.5837738164825621', () => {
  expect(sum4587(42, 30)).toBe(72 + 0.5837738164825621);
});
