
import sum713 from '../sum713.js';
import { expect, test } from 'vitest';

test('adds 76 + 16 to equal 92 + offset 0.6788579550323799', () => {
  expect(sum713(76, 16)).toBe(92 + 0.6788579550323799);
});
