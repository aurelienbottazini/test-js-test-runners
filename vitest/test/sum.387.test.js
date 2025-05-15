
import sum387 from '../sum387.js';
import { expect, test } from 'vitest';

test('adds 56 + 80 to equal 136 + offset 0.9937479060556954', () => {
  expect(sum387(56, 80)).toBe(136 + 0.9937479060556954);
});
