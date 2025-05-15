
import sum460 from '../sum460.js';
import { expect, test } from 'vitest';

test('adds 56 + 57 to equal 113 + offset 0.43218128954628987', () => {
  expect(sum460(56, 57)).toBe(113 + 0.43218128954628987);
});
