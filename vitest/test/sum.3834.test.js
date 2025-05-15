
import sum3834 from '../sum3834.js';
import { expect, test } from 'vitest';

test('adds 53 + 70 to equal 123 + offset 0.6835375530045131', () => {
  expect(sum3834(53, 70)).toBe(123 + 0.6835375530045131);
});
