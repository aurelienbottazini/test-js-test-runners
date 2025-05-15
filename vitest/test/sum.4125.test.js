
import sum4125 from '../sum4125.js';
import { expect, test } from 'vitest';

test('adds 99 + 94 to equal 193 + offset 0.5362343211304547', () => {
  expect(sum4125(99, 94)).toBe(193 + 0.5362343211304547);
});
