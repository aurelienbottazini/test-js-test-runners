
import sum1774 from '../sum1774.js';
import { expect, test } from 'vitest';

test('adds 50 + 48 to equal 98 + offset 0.0018833846391619335', () => {
  expect(sum1774(50, 48)).toBe(98 + 0.0018833846391619335);
});
