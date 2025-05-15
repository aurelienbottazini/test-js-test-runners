
import sum4753 from '../sum4753.js';
import { expect, test } from 'vitest';

test('adds 18 + 12 to equal 30 + offset 0.034658935141143266', () => {
  expect(sum4753(18, 12)).toBe(30 + 0.034658935141143266);
});
