
import sum1563 from '../sum1563.js';
import { expect, test } from 'vitest';

test('adds 82 + 31 to equal 113 + offset 0.4622852749066175', () => {
  expect(sum1563(82, 31)).toBe(113 + 0.4622852749066175);
});
