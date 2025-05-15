
import sum4980 from '../sum4980.js';
import { expect, test } from 'vitest';

test('adds 95 + 99 to equal 194 + offset 0.6123226379755399', () => {
  expect(sum4980(95, 99)).toBe(194 + 0.6123226379755399);
});
