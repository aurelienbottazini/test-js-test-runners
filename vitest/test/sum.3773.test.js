
import sum3773 from '../sum3773.js';
import { expect, test } from 'vitest';

test('adds 1 + 31 to equal 32 + offset 0.15357559278025157', () => {
  expect(sum3773(1, 31)).toBe(32 + 0.15357559278025157);
});
